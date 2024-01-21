import starIcon from './assets/icon-star.svg';
import thankYou from './assets/illustration-thank-you.svg';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSelected = (ratingCount: number) => {
    setSelected(ratingCount);
  };

  const handleSubmitted = () => {
    setSubmitted(true);
  };

  const renderRating = () => {
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
      const ratingsSelected = i <= selected;
      ratings.push(
        <div
          key={i}
          onClick={() => handleRatingSelected(i)}
          className={` rounded-full transition duration-300 hover:bg-[#fc7710] w-10 h-10 flex justify-center items-center text-center ${
            ratingsSelected ? 'bg-[#7b8898]' : 'bg-[#262f38]'
          } `}
        >
          {i}
        </div>
      );
    }
    return ratings;
  };

  return (
    <>
      {submitted ? (
        <main className="min-h-screen flex justify-center items-center">
          <div className="bg-[#212832] flex flex-col rounded-2xl w-80 h-96 items-center">
            <div className="flex justify-center items-center mt-10">
              <img src={thankYou} alt="" width={162} height={108} />
            </div>
            <div className="rounded-xl flex items-center justify-center bg-[#1e3140] w-40 h-6 mt-10">
              <p className="text-center text-xs text-[#c07b53]">
                You selected {selected} out of 5
              </p>
            </div>
            <h3 className="font-bold text-2xl mx-4 mt-5">Thank you!</h3>
            <p className="px-1 mx-2 mt-2 text-sm font-custom text-[#666d77] text-center">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch
            </p>
          </div>
        </main>
      ) : (
        <main className="min-h-screen flex justify-center items-center">
          <div className="bg-[#212832] flex flex-col rounded-2xl w-80 h-80">
            <div className="bg-[#262f38] rounded-full w-10 h-10 items-center flex justify-center p-2 mx-4 mt-4">
              <img src={starIcon} alt="" width={15} height={15} />
            </div>
            <h3 className="font-bold text-2xl mx-4 mt-5">How did we do?</h3>
            <div className="h-18 mt-2">
              <p className="mx-4 text-sm font-custom text-[#666d77]">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering
              </p>
            </div>
            <div className="flex flex-row justify-between mx-4 mt-5">
              {renderRating()}
            </div>
            <button
              onClick={handleSubmitted}
              className="bg-[#fc7613] transition duration-300 hover:bg-[#ffff] hover:text-[#fc7613] outline-white rounded-3xl mx-4 p-2 mt-6"
            >
              SUBMIT
            </button>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
