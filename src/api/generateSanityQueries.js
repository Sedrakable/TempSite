export const generateQueries = (lang) => {
  const navbarQuery = `*[_type == 'navbar' && lang == '${lang}'][0]`;
  const footerQuery = `*[_type == 'footer' && lang == '${lang}'][0]{
      ...,
      legals[]->{
        title,
        path,
      },
      socials->{
        ...,
        links[],
      },
    }`;
  const serviceQuery = `*[_type == 'servicePage' && lang == '${lang}'] {
      ...,
      path,
      title,
      lang,
      hero{
        ...,
        quote->,
      },
      features->{
        features[]->,
      },
      processes->{
        processes[]->{
          ...,
          features[]->,
        },
      },
      work->{
        title,
        works[]->{
          slug,
          customImages,
          thumbnailImage,
          title,
          desc,
          primaryLink,
        }
      },
    }`;
  const aboutQuery = `*[_type == 'aboutPage' && lang == '${lang}'][0] {
      ...,
      about->,
      values->,
      work->{
        works[]->,
      },
    }`;
  const contactQuery = `*[_type == 'contactPage' && lang == '${lang}'][0] {
      ...,
      title,
      form->,
    }`;
  const homeQuery = `*[_type == 'homePage' && lang == '${lang}'][0] {
      ...,
      title,
      lang,
      hero{
        ...,
        quote->,
      },
      services-> {
        services[]->{
          path,
          title,
          features->{
            features[]->{
              title,
              customImage,
            }
          },
          processes,
          price
        },
      },
      values->,
      about->,
      work->{
        works[]->{
          slug,
          thumbnailImage,
          customImages,
          title,
          desc,
          primaryLink,
        },
      },
    }`;
  const legalQuery = `*[_type == 'legalPage' && lang == '${lang}']`;
  const notFoundQuery = `*[_type == 'notFoundPage' && lang == '${lang}'][0]`;

  return {
    navbarQuery,
    footerQuery,
    serviceQuery,
    aboutQuery,
    contactQuery,
    homeQuery,
    legalQuery,
    notFoundQuery,
  };
};
