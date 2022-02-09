const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://rajshekhar26.github.io/cleanfolio',
    title: 'LG.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Liz Gaubatz',
    role: 'Full Stack Software Developer',
    description:
        'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
    resume: 'https://docs.google.com/document/d/1h5L7CcXgIQk5xNegMQaPUtX1sG_lbNai7hwGWexXRTI/edit?usp=sharing',
    social: {
        linkedin: 'https://www.linkedin.com/in/liz-gaubatz-502346176/',
        github: 'https://github.com/LizGaubatz',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Project 1',
        description:
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'Project 2',
        description:
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'Project 3',
        description:
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'MongoDB',
    'Express',
    'React',
    'NodeJS',
    'JQuery',
    'Material UI',
    'Angular',
    'MySQL',
    'Python',
    'Flask',
    '.Net',
    'C#',
    'Git',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'gaubatz14@icloud.com',
}

export { header, about, projects, skills, contact }