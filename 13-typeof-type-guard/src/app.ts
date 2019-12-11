class Song {
  constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song): string {
  if (typeof item.duration === 'string') {
    return item.duration;
  } else if (typeof item.duration === 'number') {
    const { duration } = item;
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;
    return `${minutes}:${seconds}`;
  }
  item.duration; // typeof item.duration == 'never' because this line will never be reached
}

const songDurationFromString = getSongDuration(
  new Song('Wonderful Wonderful', '05:31'),
);
console.log(songDurationFromString);

const songDurationFromMS = getSongDuration(
  new Song('Wonderful Wonderful', 330000),
);
console.log(songDurationFromMS);
