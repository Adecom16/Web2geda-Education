import { useState } from "react";
import PostAdModal from "../components/PostAd";
// import MainLayout from "Layout/MainLayout";

const Education = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const popularExaminations = [
    {
      id: 1,
      acronym: "JAMB",
      examBody: "Joint Admission and Matriculation Board",
      img: "./assets/JAMB.svg",
      link: "https://www.jamb.gov.ng/",
    },
    {
      id: 2,
      acronym: "POST UTME",
      examBody: "University Entrance Examinations",
      img: "./assets/JAMB.svg",
      link: "https://www.jamb.gov.ng/",
    },
    {
      id: 3,
      acronym: "WAEC",
      examBody: "West African Examination Council",
      img: "./assets/waec.svg",
      link: "https://www.waecnigeria.org/",
    },
    {
      id: 4,
      acronym: "NECO",
      examBody: "National Examinational Council",
      img: "./assets/neco.svg",
      link: "https://neco.gov.ng/",
    },
  ];

  const resources = [
    {
      id: 1,
      about:
        "Nigerian Defence Academy entrance examination past questions 2012 to 2022",
      img: "./assets/nda.svg",
      link: "https://nda.edu.ng/",
    },
    {
      id: 2,
      about: "JAMB past questions 2012-2022",
      img: "./assets/JAMB.svg",
      link: "https://www.jamb.gov.ng/",
    },
    {
      id: 3,
      about: "LAUTECH Post-UTME screening form is out!",
      img: "./assets/LAUTECH.svg",
      link: "https://www.lautech.edu.ng/",
    },
    {
      id: 4,
      about: "UNILAG Post- UTME past questions 2012 to 2023",
      img: "./assets/unilag.svg",
      link: "https://unilag.edu.ng/",
    },
    {
      id: 5,
      about: "UI Post- UTME past questions 2012 to 2023",
      img: "./assets/ui.svg",
      link: "https://ui.edu.ng/",
    },
  ];

  const latestNews = [
    {
      id: 1,
      about: "UNILAG admission list first batch is out!",
      img: "unilag.png",
      link: "https://unilag.edu.ng/",
    },
    {
      id: 2,
      about: "LAUTECH Post-UTME screening form is out",
      img: "./assets/LAUTECH.svg",
      link: "https://www.lautech.edu.ng/",
    },
    {
      id: 3,
      about: "WAEC 2023 result is out!",
      img: "./assets/waec.svg",
      link: "https://www.waecnigeria.org/",
    },
    {
      id: 4,
      about: "JAMB result 2023 is out!",
      img: "./assets/JAMB.svg",
      link: "https://www.jamb.gov.ng/",
    },
    {
      id: 5,
      about: "UI Post- UTME past questions 2012 to 2023",
      img: "./assets/ui.svg",
      link: "https://ui.edu.ng/",
    },
  ];

  const otherExaminations = [
    {
      id: 1,
      acronym: "NDA",
      examBody: "Nigeria Defence Academy",
      img: "./assets/nda.svg",
      link: "https://nda.edu.ng/",
    },
    {
      id: 2,
      acronym: "NABTEB",
      examBody: "National Business and Technical Examinations Board",
      img: "./assets/nabteb.svg",
      link: "https://nabteb.gov.ng/",
    },
    {
      id: 3,
      acronym: "NIMASA",
      examBody: "Nigerian Maritime Administration and Safety Agency",
      img: "./assets/nimasa.svg",
      link: "https://nimasa.gov.ng/",
    },
    {
      id: 4,
      acronym: "TRCN PQE",
      examBody:
        "Teachers Registration Council of Nigeria Professional Qualifying Examination",
      img: "./assets/trcn.svg",
      link: "https://trcn.gov.ng/",
    },
  ];

  return (
    // <MainLayout>
      <section className="md:mt-[5%] gap-4 md:py-4 px-2 md:px-14">
        {isModalOpen && <PostAdModal closeModal={closeModal} />}
        <div
          className={`flex flex-wrap md:justify-between ${
            isModalOpen ? "modal-open" : ""
          }`}
        >
          <div className="p-3 md:p-10 bg-white md:w-[65%] h-full">
            <h1 className="text-[1.5rem] md:text-[2rem] font-semibold p-4">
              Education
            </h1>
            <div className="md:min-h-[55vh] flex justify-center items-center w-full my-3 md:mb-8 rounded-xl">
              <img
                src="./assets/advertise.svg"
                onClick={openModal}
                alt="ads"
                className="object-cover w-full md:w-[80%] h-full cursor-pointer rounded-xl"
              />
            </div>
            <div className="mt-3 md:mt-6 popular-exam md:w-[90%] mx-auto">
              <h2 className="pb-4 text-[1.5rem] md:text-[2rem] font-semibold p-4">
                Popular examinations
              </h2>
              {popularExaminations.map(
                ({ id, acronym, examBody, img, link }) => (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={id}
                    className="items-center block gap-1 px-2 py-8 mb-3 leading-7 text-center text-black no-underline bg-gray-200 rounded-lg md:flex"
                  >
                    <div className="md:w-[20%] flex justify-center items-center">
                      <img
                        src={img}
                        alt=""
                        className="object-cover md:w-[50%] h-full"
                      />
                    </div>
                    <div className="md:w-[80%]">
                      <h3 className="font-bold">{acronym}</h3>
                      <p className="text-[1.5rem]">{examBody}</p>
                    </div>
                  </a>
                )
              )}
            </div>
            <div className="md:w-[90%] mx-auto flex items-center justify-center w-full my-8 min-h-48">
              <img src="./assets/qatar.jfif" alt="" className="w-full h-full" />
            </div>
            <div className="md:w-[90%] mx-auto other-examination">
              <h2 className="text-[1.5rem] md:text-[2rem] font-semibold p-4">
                Other Examinations
              </h2>
              <div className="flex flex-wrap items-center justify-between gap-2">
                {otherExaminations.map(
                  ({ id, acronym, examBody, img, link }) => (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={id}
                      className="no-underline text-black bg-gray-300 rounded-lg mb-2 md:mb-5 md:px-8 px-4 md:min-h-[20vh] justify-center py-4 md:w-[48%] w-full flex flex-col items-center"
                    >
                      <div className="w-[25%] mb-2 flex justify-center items-center">
                        <img src={img} alt="" className="w-[80%] h-full" />
                      </div>
                      <div className="w-full text-center">
                        <h3 className="font-bold">{acronym}</h3>
                        <p className="text-[1.5rem]">{examBody}</p>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="Resources-wrapper px-3 md:px-14 md:w-[35%] min-h-full">
            <div className="pt-5 md:pt-10 Resources">
              <h1 className="text-[1.5rem] md:text-[2rem] font-semibold p-4">
                Resources
              </h1>
              {resources.map(({ id, about, img, link }) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={id}
                  className="flex flex-col items-center justify-center gap-2 px-2 py-3 mb-3 no-underline bg-gray-200 rounded-lg lg:justify-between lg:flex-row"
                >
                  <div className="md:w-[20%] w-full flex justify-center items-center">
                    <img src={img} alt="" className="md:w-[80%] h-full" />
                  </div>
                  <div className="w-[80%] flex items-center">
                    <p className="text-[1.5rem]">{about}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="pt-5 md:pt-10 Latest News">
              <h2 className="pb-3 text-[1.5rem] md:text-[2rem] font-semibold p-4">
                Latest news
              </h2>
              {latestNews.map(({ id, about, img, link }) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={id}
                  className="flex flex-col items-center justify-center gap-2 px-2 py-3 mb-3 no-underline bg-gray-200 rounded-lg lg:justify-between lg:flex-row"
                >
                  <div className="md:w-[20%] w-full flex justify-center items-center">
                    <img src={img} alt="" className="md:w-[80%] h-full" />
                  </div>
                  <div className="w-[80%] flex items-center">
                    <p className="text-[1.5rem]">{about}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    // </MainLayout>
  );
};

export default Education;
