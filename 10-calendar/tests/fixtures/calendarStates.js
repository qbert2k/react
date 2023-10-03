export const events = [
    {
        id: '1',
        start: new Date('2024-08-05 16:00:00'),
        end: new Date('2024-08-05 18:00:00'),
        title: 'B-day Javier',
        notes: 'Some notes'
    },
    {
        id: '2',
        start: new Date('2024-06-08 13:00:00'),
        end: new Date('2024-06-08 15:00:00'),
        title: 'B-day Melissa',
        notes: 'Some other notes'
    },
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: {...events[0]}
}