import { assets, dummyTestimonialData } from "../assets/assets";

const Testimonial = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Loved by Creators
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-14 mt-10 mb-10">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5"
          >
            <div className="flex flex-col items-center px-5 py-4 relative">
              <img
                className="h-24 w-24 absolute -top-14 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="pt-8 text-center">
                <h1 className="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h1>
                <p className="text-gray-800/80">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-500 px-6 text-center">
              {testimonial.content}
            </p>
            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      src={
                        i < testimonial.rating
                          ? assets.star_icon
                          : assets.star_dull_icon
                      }
                      alt="rating star"
                      className="w-5 h-5"
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
