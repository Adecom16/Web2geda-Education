import PropTypes from "prop-types";
import { useState } from "react";

const PostAdModal = ({ closeModal }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleFinish = () => {
    closeModal();
  };
  return (
    <>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center w-full h-screen overflow-auto bg-gray-400 bg-opacity-50"
        onClick={closeModal}
      >
        <div
          className="relative bg-white w-full md:w-[60%] lg:w-[50%] flex justify-center rounded-md p-2 cursor-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {step === 1 && <PostAd nextStep={nextStep} />}
          {step === 2 && (
            <MakeAdPayment nextStep={nextStep} previousStep={previousStep} />
          )}
          {step === 3 && <AdPaymentSuccessful handleFinish={handleFinish} />}

          <div
            className="absolute cursor-pointer right-2 top-2"
            onClick={closeModal}
          >
            <svg
              fill="#4F0DA3"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostAdModal;
PostAdModal.propTypes = {
  closeModal: PropTypes.func,
};

export const PostAd = ({ nextStep }) => {
  const handleFileInputChange = (event) => {
    // Handle file input change here
    const file = event.target.files[0];
    // Do something with the selected file
    console.log(file);
  };

  const handlePreviewCost = () => {
    // Add any logic here if needed before progressing to the next step
    nextStep();
  };
  return (
    <>
      <div className="w-[90%] bg-white">
        {/* <div className="w-[90%] bg-white md:w-[60%] py-3 lg:w-[50%]"> */}
        <div className="flex items-center justify-between px-4 py-2 text-center border-b-2 border-gray-300 md:px-10">
          <a href="/">
            <i className="text-lg md:text-2xl fa-solid fa-arrow-left"></i>
          </a>

          <h1 className="text-[1.2rem] md:text-[1.8rem] font-medium">
            Post an ad
          </h1>

          <img
            src="./assets/logo.svg"
            height={50}
            width={50}
            alt="2geda-logo"
          />
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 md:p-4 p-2 bg-[#4F0DA3] text-white border border-[##B469EF] rounded-lg">
            <img src="./assets/megaphone.svg" alt="" />
            <p>
              Reach out to World Audience in Large Numbers while you Pay Less.
            </p>
          </div>

          <div className="py-3">
            <h3>Advert information</h3>

            <div className="flex w-full gap-4 my-2">
              <input
                id="businessName"
                type="text"
                placeholder="School name"
                className="w-full p-3 border-2 rounded-md bg-slate-50 sm:text-sm sm:leading-6 focus:outline-none"
              />

              <input
                id="businessName"
                type="text"
                placeholder="Additional info"
                className="w-full p-3 border-2 rounded-md bg-slate-50 sm:text-sm sm:leading-6 focus:outline-none"
              />
            </div>

            <h3>Duration</h3>
            <div className="flex flex-wrap justify-between gap-2 my-2">
              <span>24 hours</span>
              <span>48 hours</span>
              <span>72 hours</span>
              <span>1 week</span>
              <span>2 weeks</span>
              <span>1 month</span>
              <span>3 month</span>
              <span>6 month</span>
              <span>1 year</span>
            </div>
          </div>

          <div>
            {/* <h3>upload advert image</h3> */}
            <label className="text-sm">upload advert image</label>
            <input
              id="businessLicense"
              type="file"
              placeholder="Choose file to upload"
              className="w-full p-3 border-2 rounded-md bg-slate-50 sm:text-sm sm:leading-6 focus:outline-none"
              onChange={handleFileInputChange}
            />
          </div>
          <textarea
            name="adsMessage"
            id="adsMessage"
            cols="10"
            rows="4"
            className="w-full p-4 mt-4 border border-gray-300 rounded-md resize-none"
            placeholder="Add a note(optional)"
          ></textarea>

          <div className="flex justify-center md:py-8">
            <button
              type="submit"
              onClick={handlePreviewCost}
              className="flex w-[90%] md:w-[30%] justify-center rounded-md bg-[#4F0DA3] px-3 py-2 md:py-3 text-sm font-medium leading-6 text-white shadow hover:bg-[#783cc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#783cc6]"
            >
              Preview cost
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

PostAd.propTypes = {
  nextStep: PropTypes.func,
};

export const MakeAdPayment = ({ nextStep }) => {
  const handleSubmitPayment = (event) => {
    // Add any logic here if needed before progressing to the next step
    event.preventDefault(); // Prevent default form submission behavior
    nextStep();
  };

  return (
    <>
      <section className="w-[90%] bg-white py-3 px-4">
        {/* <section className="w-[90%] bg-white md:w-[70%] py-3 lg:w-[60%] px-4"> */}
        <div className="flex items-center justify-between px-4 py-2 text-center border-b-2 border-gray-300 md:px-8">
          <a href="/">
            <i className="text-lg md:text-2xl fa-solid fa-arrow-left"></i>
          </a>

          <h1 className="text-[1.2rem] md:text-[1.8rem] font-medium">
            Make payment
          </h1>

          <img
            src="./assets/logo.svg"
            height={50}
            width={50}
            alt="2geda-logo"
          />
        </div>
        <p className="py-2">You have selected</p>
        <div className="bg-[#FF8A15] flex rounded-md py-4 pl-2 justify-between items-center">
          <span>
            <p>1 month</p>
            <p>Education Advert</p>
          </span>

          <p className="p-2 font-semibold bg-gray-100 rounded-l-md">#50,000</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="py-4">
            <p className="p-2 pt-5">Select your mode of payment</p>
            <fieldset className="p-2 bg-gray-200 rounded-lg md:p-4">
              <form id="paymentForm" className="py-6">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Enter your card number"
                  className="w-full p-3 border-2 rounded-md bg-slate-50 sm:text-sm sm:leading-6 focus:outline-none"
                  required
                />

                <div className="gap-2 md:flex md:justify-center md:items-center">
                  <div className="flex flex-col my-2 md:w-[48%]">
                    <label htmlFor="expiry">Expiry</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      placeholder="MM/YYYY"
                      className="p-3 border-2 rounded-md bg-slate-50 sm:text-sm sm:leading-6 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col md:w-[48%] ">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="Enter CVV"
                      className="p-3 border-2 rounded-md bg-slate-50 sm:text-sm sm:leading-6 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center md:py-8">
                  <button
                    type="submit"
                    onClick={handleSubmitPayment}
                    className="flex w-[90%] md:w-[50%] mt-3 justify-center rounded-md bg-[#4F0DA3] px-3 py-2 md:py-3 text-sm font-medium leading-6 text-white shadow hover:bg-[#783cc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#783cc6]"
                  >
                    Pay NGN 50,000
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </section>
    </>
  );
};

MakeAdPayment.propTypes = {
  nextStep: PropTypes.func,
};

export const AdPaymentSuccessful = () => {
  return (
    <>
      <div className="w-[70%] bg-white py-6">
        {/* <div className="w-[70%] bg-white md:w-[40%] py-6"> */}
        <div className="flex flex-col items-center p-6 text-center">
          <img src="./assets/thankyou.svg" alt="Thankyou svg" />

          <p className="text-[1rem] md:text-[1.2rem] md:w-[60%] pt-4">
            Your payment was successful
          </p>
        </div>

        <div className="flex justify-center md:py-8">
          <a
            href="/education"
            className="flex w-[90%] md:min-w-[30%] justify-center rounded-md bg-[#4F0DA3] px-3 py-2 md:py-3 text-sm font-medium leading-6 text-white shadow hover:bg-[#783cc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#783cc6]"
          >
            Back to messaging
          </a>
        </div>
      </div>
    </>
  );
};
