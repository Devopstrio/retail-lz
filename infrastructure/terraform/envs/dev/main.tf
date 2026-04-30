module "retail_networking" {
  source = "./modules/networking"

  hub_region = "us-east-1"
  spoke_regions = ["eu-west-1", "ap-southeast-1"]
}

module "retail_db" {
  source = "./modules/database"

  db_name = "retail_omnichannel_data"
}

module "retail_cache" {
  source = "./modules/redis"

  cluster_mode = true
}

module "retail_monitoring" {
  source = "./modules/monitoring"

  retention_days = 90
}

resource "kubernetes_namespace" "retail_systems" {
  metadata {
    name = "retail-landing-zone"
    labels = {
      "retail.ops/managed" = "true"
    }
  }
}

resource "kubernetes_config_map" "retail_configs" {
  metadata {
    name      = "retail-workload-configs"
    namespace = kubernetes_namespace.retail_systems.metadata[0].name
  }

  data = {
    "ecommerce-endpoint" = "https://shop.retail-lz.io"
    "pos-sync-interval"  = "300"
    "auto-replenish"     = "true"
  }
}
