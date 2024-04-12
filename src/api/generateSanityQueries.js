export const generateQueries = () => {
  const navbarQuery = `*[_type == 'navbar'][0]`;
  const settingsQuery = `*[_type == 'settings'][0]`;
  const footerQuery = `*[_type == 'footer'][0]{
      ...,
      legals[]->{
        title,
      },
      socials->{
        ...,
        links[],
      },
    }`;
 
  const homeQuery = `*[_type == 'homePage'][0] {
      ...,
      title,
      hero{
        ...,
        quote->,
      },
      services->,
      values->,
      work->{
        works[]->{
          ...,
        },
      },
      images[],
    }`;

  return {
    settingsQuery,
    navbarQuery,
    footerQuery,
    homeQuery,
  };
};
