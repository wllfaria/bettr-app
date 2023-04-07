import * as Sentry from 'sentry-expo';

export function trackError(error: unknown) {
  Sentry.Native.captureException(error);
}

type AddBreadcrumbData = {
  category: string;
  message: string;
};

export function addBreadcrumb({ category, message }: AddBreadcrumbData) {
  Sentry.Native.addBreadcrumb({
    category,
    message,
    level: 'info',
    timestamp: Date.now(),
  });
}

type TrackEventData = {
  message: string;
};

export function trackEvent({ message }: TrackEventData) {
  Sentry.Native.captureEvent({
    level: 'log',
    message: message,
    timestamp: Date.now(),
  });
}
