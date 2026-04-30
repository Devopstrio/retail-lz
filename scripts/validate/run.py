import sys
import argparse
from retail.orders.engine import OrderProcessor, InventoryManager, POSSystem
from core.governance.engine import KPIEngine, CostAllocator

def run_retail_simulation(action: str):
    # 1. Initialize Engines
    om = OrderProcessor()
    im = InventoryManager()
    kpi = KPIEngine()
    cost = CostAllocator()
    
    # 2. Mock Product Data
    print(f"--- Retail Landing Zone Intelligence Simulation ---")
    print(f"Action: {action}")
    
    if action == "seed":
        print("\nSeeding Inventory...")
        im.update_stock("sku-nike-001", 500)
        im.update_stock("sku-adidas-002", 350)
        print(f"[DATA] Inventory Seeded. SKU: nike-001 | Qty: {im.stock['sku-nike-001']}")
        
    elif action == "sync":
        print("\nSyncing POS Orders...")
        pos = POSSystem(store_id="NYC-01")
        items = [{"id": "sku-nike-001", "price": 120.00, "quantity": 1}]
        pos_order = pos.process_checkout(items)
        print(f"[DATA] POS Order Synced: {pos_order['id']} from Store: {pos_order['source']}")
        
        # Calculate KPI
        conv = kpi.calculate_conversion_rate(1000, 45)
        print(f"[KPI] Store NYC-01 Conversion Rate: {conv}%")
        
        # Allocate Cost
        allocation = cost.calculate_allocation(5000.0, {"NA": 0.6, "EU": 0.3, "APAC": 0.1})
        print(f"[FIN] Regional Cost Allocation: {allocation}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--action", default="sync")
    args = parser.parse_args()
    run_retail_simulation(args.action)
