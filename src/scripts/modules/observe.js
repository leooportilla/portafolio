const dataLinksHome = document.querySelectorAll(`[data-observe="links home"]`)
const dataProject = document.querySelectorAll(`[data-observe="project"]`)
const dataSkills = document.querySelectorAll(`[data-observe="skills"]`)
const options = {
    rootMargin: "0px",
    threshold: .4,
}

export const observeIntersetion = () => {
    const observeLinkHome = new IntersectionObserver(entries => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add('observe-links');
                }, index * 200);

            } else {

                setTimeout(() => {
                    entry.target.classList.remove('observe-links');
                }, index * 200);
            }
        })

    }, options)

    const observeSkills = new IntersectionObserver(entries => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add('observe');
                }, index * 100);

            } else {

                setTimeout(() => {
                    entry.target.classList.remove('observe');
                }, index * 100);
            }
        })

    }, options)

    const observeProject = new IntersectionObserver(entries => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add('observe');
                }, index * 100);

            } else {

                setTimeout(() => {
                    entry.target.classList.remove('observe');
                }, index * 100);
            }
        })

    }, options)

    dataLinksHome.forEach(element => {
        observeLinkHome.observe(element)
    })

    dataSkills.forEach(element => {
        observeSkills.observe(element)
    })

    dataProject.forEach(element => {
        observeProject.observe(element)
    })
}
