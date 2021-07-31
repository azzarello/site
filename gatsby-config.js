module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://azzarello.codes`,
    // Your Name
    name: 'Connor Azzarello',
    // Main Site Title
    title: `Connor Azzarello | Computer Science & Engineering Graduate`,
    // Description that goes under your name in main bio
    description: `Passionate code-monkey looking for meaningful career opportunities`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/azzarello`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/connorazzarello/`,
    // Content of the About Me section
    about: `Recent Computer Science and Engineering graduate looking for full-time roles in the area of Dev-Ops, Data Engineer, and Software Engineering`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Gameday Guru',
        description:
          'Side-project/early stage startup focusing on providing innovative sports data analytics using advanced machine learning and industry experience in sports gaming.',
        link: 'https://gamedayguru.com/',
      },
      {
        name: 'Enhanced Sensing Methods for UAV-based Disaster Recovery',
        description:
          "Developed a modular, low-cost UAV (drone) to locate injured or distressed victims in disaster scenarios. Implemented SSD-MobileNet v2 model using Docker for visible-light object-detection inference. Improved computational speed by 8.16% by re-training SSD-MobileNet to only detect the person object class which led to a 25.8% decrease in the model's overall memory footprint. Modified the NVIDIA Jetson Nano's scheduling algorithm to optimize battery life, achieving flight-time metrics on par with industry standard systems at 20% the cost.",
        link: 'https://bit.ly/AzzarelloThesis',
      },
      {
        name: 'Paper Prisons Initiative',
        description:
          'Analyzed correlations between criminal justice policies and outcomes on a national and state basis. Developed an interactive questionnaire to help recently released offenders navigate the process to obtain state identification, a requirement for job and housing applications, and facilitate reintegration into society. Designed a web application that allowed individuals to find out if they were eligible to have their criminal record expunged and provided specific steps they could pursue if they were allowed to apply.',
        link: 'https://bit.ly/PaperPrisons',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Gameday Guru',
        description: 'Head of Technology, December 2020 - Present',
        link: 'https://gamedayguru.com',
      },
      {
        name: 'Samirian Chemicals',
        description:
          'Business Systems Analyst Intern, May 2020 - September 2020',
        link: 'http://samirian.com/',
      },
      {
        name: 'Zoom Systems',
        description: 'Data Science Intern, January 2019 - September 2019',
        link: 'https://www.zoomsystems.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C/C++, SQL, JavaScript, TypeScript, HTML/CSS, Golang, Java, R',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Google Cloud Platform (GCP), CI / CD, Jenkins, Linux, TravisCI, Heroku',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-3NVWBHWFLR`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
