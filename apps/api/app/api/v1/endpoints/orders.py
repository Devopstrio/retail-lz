from fastapi import APIRouter, Body
router = APIRouter()
@router.get('/')
def list_orders():
    return {'orders': [{'id': 'ord-001', 'total': 125.50, 'status': 'PROCESSING', 'customer': 'Shopper A'}]}
@router.post('/')
def create_order(data: dict = Body(...)):
    return {'status': 'CREATED', 'order_id': 'ord-9942'}
