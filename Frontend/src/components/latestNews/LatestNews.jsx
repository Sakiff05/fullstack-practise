function LatestNews() {
  return (
    <div className="px-24 mt-20">
      <h1 className="text-4xl text-center font-bold">
        Latest News from our Blog
      </h1>
      <p className="text-gray-400 text-center py-4">
        Who are in extremely love with eco friendly system.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="card">
          <div className="imgWrapper rounded">
            <img
              src="https://preview.colorlib.com/theme/immigration/img/b1.jpg"
              alt=""
              className="w-full rounded"
            />
          </div>
          <div className="content flex flex-col items-start">
            <div className="tags flex gap-2 mt-3">
              <span className="bg-rose-600 text-white p-1">Travel</span>
              <span className="bg-rose-600 text-white p-1">Life style</span>
            </div>
            <div className="text flex flex-col gap-2">
              <p className="font-bold text-xl">
                Portable latest Fashion for young women
              </p>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <p className="text-lg text-gray-500">31st January, 2018</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgWrapper rounded">
            <img
              src="https://preview.colorlib.com/theme/immigration/img/b2.jpg"
              alt=""
              className="w-full rounded"
            />
          </div>
          <div className="content flex flex-col items-start">
            <div className="tags flex gap-2 mt-3">
              <span className="bg-rose-600 text-white p-1">Travel</span>
              <span className="bg-rose-600 text-white p-1">Life style</span>
            </div>
            <div className="text flex flex-col gap-2">
              <p className="font-bold text-xl">
                Portable latest Fashion for young women
              </p>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <p className="text-lg text-gray-500">31st January, 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
