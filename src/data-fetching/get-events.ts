import deviceEventsJson from './events.json';

export type DeviceEvent = typeof deviceEventsJson[number] & { id: number };
/**
 * Fetches device events from mocked backend
 */
export async function getEvents() {
  const delayMs = Math.random() * 100;

  return new Promise<DeviceEvent[]>((resolve) =>
    setTimeout(
      () => resolve(deviceEventsJson.map((de, i) => ({ ...de, id: i }))),
      delayMs
    )
  );
}
