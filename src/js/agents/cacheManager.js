// Regional Market Hub Cache Engine
// Reduces redundant LLM invocations and provides instant low-latency delivery to farmers in low-bandwidth rural areas

import { regionalClusters } from '../data/regionalData.js';

const CACHE_STORAGE_KEY = 'kisansetu_cluster_cache_v2';

export class CacheManager {
  constructor() {
    this.clusters = this.initCache();
    this.currentClusterId = this.clusters[0]?.id || 'nashik_onion_belt';
    this.activeLanguage = 'hi'; // default to Hindi for maximum accessibility
  }

  initCache() {
    try {
      const stored = localStorage.getItem(CACHE_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage unavailable, using in-memory cluster data', e);
    }
    // initialize with regionalClusters
    this.saveCache(regionalClusters);
    return JSON.parse(JSON.stringify(regionalClusters));
  }

  saveCache(data) {
    try {
      localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not persist cache to storage', e);
    }
  }

  getAllClusters() {
    return this.clusters;
  }

  getCurrentCluster() {
    const cluster = this.clusters.find(c => c.id === this.currentClusterId) || this.clusters[0];
    return cluster;
  }

  setCurrentCluster(clusterId) {
    this.currentClusterId = clusterId;
    const cluster = this.getCurrentCluster();
    if (cluster) {
      // Simulate real-time cluster query increment
      cluster.activeFarmers = (cluster.activeFarmers || 500) + 1;
      this.saveCache(this.clusters);
    }
    return cluster;
  }

  getLanguage() {
    return this.activeLanguage;
  }

  setLanguage(lang) {
    this.activeLanguage = lang;
  }

  // Add volunteer post and optionally update crop mandi price in the cluster cache
  addVolunteerSubmission(clusterId, submission) {
    const cluster = this.clusters.find(c => c.id === clusterId);
    if (!cluster) return false;

    const newPost = {
      id: 'vol-' + Date.now(),
      author: submission.author || 'Local Kisan Mitra',
      timeAgo: 'Just now',
      crop: submission.cropName,
      verifiedPrice: `₹${Number(submission.price).toLocaleString('en-IN')} / Qtl (Volunteer Verified)`,
      note: submission.notes || 'Direct spot report from mandi entrance.',
      noteHi: submission.notes || 'मंडी प्रांगण से सीधी सत्यापित रिपोर्ट।'
    };

    if (!cluster.volunteerPosts) {
      cluster.volunteerPosts = [];
    }
    cluster.volunteerPosts.unshift(newPost);

    // If matching crop exists, update its mandi price and recalculate spread!
    const targetCrop = cluster.crops.find(c =>
      c.id.toLowerCase() === submission.cropId?.toLowerCase() ||
      c.nameEn.toLowerCase().includes(submission.cropName?.toLowerCase()) ||
      c.nameHi.includes(submission.cropName)
    );

    if (targetCrop && submission.price > 0) {
      const oldPrice = targetCrop.mandiPriceQuintal;
      targetCrop.mandiPriceQuintal = Number(submission.price);
      targetCrop.mandiPriceKg = Number((submission.price / 100).toFixed(1));
      targetCrop.spreadPct = Number((((targetCrop.retailPriceQuintal - targetCrop.mandiPriceQuintal) / targetCrop.retailPriceQuintal) * 100).toFixed(1));
      targetCrop.trend7d.push(targetCrop.mandiPriceKg);
      if (targetCrop.trend7d.length > 7) targetCrop.trend7d.shift();
      targetCrop.status = targetCrop.mandiPriceQuintal >= oldPrice ? 'rising' : 'falling';
    }

    cluster.cachedMinsAgo = 1; // fresh cache
    cluster.activeFarmers += 1;
    this.saveCache(this.clusters);
    return true;
  }

  // Simulate AI Agent background cache refresh
  refreshClusterFromScraper(clusterId) {
    const cluster = this.clusters.find(c => c.id === clusterId);
    if (!cluster) return null;

    // Small realistic market fluctuation
    cluster.crops.forEach(crop => {
      const delta = (Math.random() * 60 - 25); // -25 to +35 Rs
      crop.mandiPriceQuintal = Math.round(crop.mandiPriceQuintal + delta);
      crop.mandiPriceKg = Number((crop.mandiPriceQuintal / 100).toFixed(1));
      crop.spreadPct = Number((((crop.retailPriceQuintal - crop.mandiPriceQuintal) / crop.retailPriceQuintal) * 100).toFixed(1));
      crop.trend7d[crop.trend7d.length - 1] = crop.mandiPriceKg;
    });

    cluster.cachedMinsAgo = 0;
    cluster.cacheHitRate = '99.2%';
    cluster.responseLatency = '16ms (Local Cache)';
    this.saveCache(this.clusters);
    return cluster;
  }
}

export const cacheManager = new CacheManager();
