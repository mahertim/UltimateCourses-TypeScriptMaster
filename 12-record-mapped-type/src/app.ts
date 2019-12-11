let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
  current: string;
  next: string;
}

const item: Record<keyof TrackStates, string> = {
  current: 'js02js9',
  next: '8nlksjsk',
};

const anotherItem: Record<keyof TrackStates, string> = {
  current: '8nlksjsk',
  next: '456',
};

// Numbers are coerced to String
dictionary[0] = item;
dictionary[1] = anotherItem;

console.log(dictionary);
