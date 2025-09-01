$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
          {
            image: 'assets/images/outbursts_sat.png',
            link: 'https://doi.org/10.1051/0004-6361/202554666',
            title: 'Magnetar outburst models with cooling simulations',
            authors: 'De Grandis et al. (A&A)',
            technologies: [],//'Semantic UI', 'CSS3'],
            description: "Simulations of outbursts as cooling of an hotsopt in the crust of a magnetar with detailed microphysics.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/envelopes.png',
            link: 'https://doi.org/10.1051/0004-6361/202554742',
            title: 'Neutron star envelopes with machine learning. A single-hidden-layer neural network application',
            authors: 'Kovlakas, DDG & Rea (A&A)',
            technologies: [],//'Semantic UI', 'CSS3'],
            description: "Using Machine learning to performa a complex fit of models of shallow NS envelopes, needed to study short-term phenomena.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/SNRKes73.png',
            link: 'https://https://arxiv.org/abs/2412.15811',
            title: 'IXPE detection of highly polarized X-rays from the magnetar 1E 1841-045',
            authors: 'Rigoselli et al. (including DDG, ApJ)',
            technologies: [],//'Semantic UI', 'CSS3'],
            description: "The first polarimetric X-ray observations of a magnetar in a phase of enhanced activity.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/HD49798.png',
            link: 'https://doi.org/10.1093/mnras/stad1611',
            title: 'Timing the X-ray pulsating companion of the hot-subdwarf HD 49798 with NICER',
            authors: 'Rigoselli, De Grandis et al. (MNRAS)',
            demo: false,
            technologies: [],//'Android', 'OpenCV'],
            description: "Long-term timing of a weird compact objects that spin-ups more than it should.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/1856.png',
            link: 'https://doi.org/10.1093/mnras/stac2587',
            title: 'Two decades of X-ray observations of the isolated neutron star RX J1856−3754',
            authors: 'De Grandis et al. (MNRAS)',
            technologies: [],//'Semantic UI', 'Jekyll'],
            description: "An XMM (and a bit of NICER) study about the propotype of an Isolated Neutron Star, confirming that even these sources can emit a bit of non-thermal radiation.",
            categories: ['featured', 'INSs']
        },
        {
            image: 'assets/images/parody_outburst.png',
            link: 'https://doi.org/10.3847/1538-4357/ac8797',
            title: 'Three-dimensional Magneto-Thermal Simulations of Magnetar Outbursts (ApJ)',
            authors: 'De Grandis et al. (ApJ)',
            technologies: [],//'Flask', 'Celery', 'Python'],
            description: "The first simulations of magnetar hotspot cooling in 3D, highlighting the fundamental role of the magnetic field in shaping the spot's size and evolution.",
            categories: ['featured', 'parody']
        },
 
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
                        <p class="paragraph-text-normal"><i>${project.authors}</i>
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
