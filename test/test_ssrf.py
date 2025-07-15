import requests
import time

BASE_URL = "http://localhost:3000"
INTERNAL_URL = "http://localhost:8000/token"

# Wait for services to be up
def wait_for_service(url, timeout=30):
    for _ in range(timeout):
        try:
            r = requests.get(url)
            if r.status_code == 200:
                return True
        except Exception:
            pass
        time.sleep(1)
    return False

def test_lab_route_accessible():
    resp = requests.get(f"{BASE_URL}/lab")
    assert resp.status_code == 200
    assert "Document Retrieval Portal" in resp.text

def test_ssrf_internal_token():
    assert wait_for_service(INTERNAL_URL)
    resp = requests.get(f"{BASE_URL}/api/fetch-document?url={INTERNAL_URL}")
    assert resp.status_code == 200
    assert "access_token" in resp.text
    assert "db-backup-ACCESS" in resp.text

def test_external_fetch():
    resp = requests.get(f"{BASE_URL}/api/fetch-document?url=https://httpbin.org/get")
    assert resp.status_code == 200
    assert "url" in resp.text 