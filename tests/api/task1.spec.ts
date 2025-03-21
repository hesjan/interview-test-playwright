import { test, expect } from '@playwright/test';

const API_URL = 'https://api.nordvpn.com/v1/helpers/ips/insights';

test.describe('IP Insights API Tests', () => {
  test('should return 200 status code', async ({ request }) => {
    const response = await request.get(API_URL);
    expect(response.status()).toBe(200);
  });

  test('should return JSON content type', async ({ request }) => {
    const response = await request.get(API_URL);
    expect(response.headers()['content-type']).toContain('application/json');
  });

  test('should return valid IP address', async ({ request }) => {
    const response = await request.get(API_URL);
    const data = await response.json();

    expect(data.ip).toBeDefined();
    expect(data.ip).toMatch(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/);
  });

  test('should return valid location data', async ({ request }) => {
    const response = await request.get(API_URL);
    const data = await response.json();

    expect(data.country).toBeDefined();
    expect(data.country_code).toBeDefined();
    expect(data.city).toBeDefined();
    expect(data.zip_code).toBeDefined();
    expect(data.state_code).toBeDefined();
    expect(typeof data.latitude).toBe('number');
    expect(typeof data.longitude).toBe('number');
  });

  test('should return valid ISP data', async ({ request }) => {
    const response = await request.get(API_URL);
    const data = await response.json();

    expect(data.isp).toBeDefined();
    expect(data.isp_asn).toBeDefined();
    expect(typeof data.isp).toBe('string');
    expect(typeof data.isp_asn).toBe('number');
  });

  test('should return valid security data', async ({ request }) => {
    const response = await request.get(API_URL);
    const data = await response.json();

    expect(data.protected).toBeDefined();
    expect(typeof data.protected).toBe('boolean');
  });

  test('should not allow post HTTP method', async ({ request }) => {
    const response = await request.post(API_URL);
    expect(response.status()).toBe(405);
  });

  test('should return response within acceptable time (1 second)', async ({ request }) => {
    const startTime = Date.now();
    await request.get(API_URL);
    const endTime = Date.now();

    const responseTime = endTime - startTime;
    expect(responseTime).toBeLessThan(1000);
  });

  test('should return consistent data structure across multiple requests', async ({ request }) => {
    const response1 = await request.get(API_URL);
    const data1 = await response1.json();

    const response2 = await request.get(API_URL);
    const data2 = await response2.json();

    expect(Object.keys(data1)).toEqual(Object.keys(data2));
  });

  test('should return the same values across multiple requests from the same location', async ({
    request,
  }) => {
    const response1 = await request.get(API_URL);
    const data1 = await response1.json();

    const response2 = await request.get(API_URL);
    const data2 = await response2.json();

    expect(Object.values(data1)).toEqual(Object.values(data2));
  });
});
