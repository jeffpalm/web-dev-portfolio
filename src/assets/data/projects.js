const projects = [
    {
        title: 'Zen Chess',
        subtitle: 'Stripped down relaxing online chess',
        url: 'https://zen-chess.com',
        github: 'https://github.com/jeffpalm/zen_chess',
        tech: ['React', 'NodeJS'],
        opensource: true,
        imgs: [
            {
                src: './assets/projects/zen-chess/main.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/zen-chess/board.png',
                desc: 'image description',
            },
        ],
        description:
            "There are already some amazing chess websites out there such as Chess.com and Lichess.org. The stat tracking, learning resources, sophisticated ranking/matchmaking are wonderful. But for me, all that information gets to my head sometimes. I'll get matched up with someone rated higher and psych myself out or somone lower and make dumb mistakes. That's what Zen Chess is for. The times when you just want to play chess and get out of your own head.",
    },
    {
        title: 'The Hub',
        subtitle:
            'An internal process automation and collaboration platform for high-volume, single point of contact (SPOC) retail automotive sales departments focused on the guest experience.',
        url: 'https://the-hub.io',
        github: 'https://github.com/jeffpalm/the-hub',
        tech: ['React', 'NodeJS', 'PostgreSQL'],
        imgs: [
            {
                src: './assets/projects/the-hub/login.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/main.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/add_ticket.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/queue.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/queue_inactive.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/ticket.png',
                desc: 'image description',
            },
        ],
        opensource: true,
        description:
            'Still a work in progress. Feel free to play around with the demo accounts that require no password: admin, sales, mgr',
        plan: 'https://1drv.ms/w/s!Al9aA_is_kzmgP7DXrsVBzuVcIG6O6g?e=PzjfyW',
    },
    {
        title: 'Data Speaks',
        subtitle:
            'Data visualization of social inequality and injustice in the U.S.',
        url: 'https://dataspeaks.us',
        github: 'https://github.com/Stories-with-Data/stories-with-data',
        tech: ['React', 'NodeJS', 'PostgreSQL'],
        imgs: [
            {
                src: './assets/projects/dataspeaks/title.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/dataspeaks/map.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/dataspeaks/state.png',
                desc: 'image description',
            },
        ],
        opensource: true,
        description:
            'Using visualizations of data sourced from the FBI, Census Bureau, Department of Justice, and a Harvard study, the goal of DataSpeaks is to educate users on social inequality/injustice in the United States and provide a call to action to get involved with their state representatives. ',
    },
]

export default projects
