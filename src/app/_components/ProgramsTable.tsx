function ProgramsTable() {
  return (
    <>
      {/* <div className="flex flex-col items-end px-20 pt-4 pb-7 mt-5 max-w-full font-bold text-right bg-white rounded-2xl shadow-sm w-[1593px] max-md:px-5"> */}
      <div className="flex flex-col items-end bg-white px-10 py-7 my-5 rounded-lg shadow-md ">
        <div className="flex flex-col  ">
          <form>
            <div className="text-lg text-gray-700 max-md:max-w-full">
              البرامج التدريبية :
            </div>
            {/* <div className="flex bg-blue-200 flex-wrap gap-4 items-center mt-5 w-full text-xs leading-snug text-black max-md:max-w-full"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {/* <div className="flex flex-col justify-center items-center self-stretch p-3 my-auto bg-white rounded-lg border border-solid border-neutral-200">
                <div className="flex gap-3 items-center">
                  <img
                    alt=""
                    loading="lazy"
                    src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/852f4a1a07d98dfdcb4139245618d3510981d0c6?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                    className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]"
                  />
                  <div className="self-stretch my-auto">
                    <span className=" text-zinc-600">الترتيب حسب:</span> التاريخ
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center self-stretch p-3 my-auto bg-white rounded-lg border border-solid border-neutral-200">
                  <div className="flex gap-3 items-center">
                    <img
                      alt=""
                      loading="lazy"
                      src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/852f4a1a07d98dfdcb4139245618d3510981d0c6?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                      className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]"
                    />
                    <div className="self-stretch my-auto">
                      <span className=" text-zinc-600">عرض :</span> جميع البرامج
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center self-stretch p-3 my-auto bg-white rounded-lg border border-solid border-neutral-200">
                  <div className="flex gap-3 items-center">
                    <img
                      alt=""
                      loading="lazy"
                      src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/852f4a1a07d98dfdcb4139245618d3510981d0c6?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                      className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]"
                    />
                    <div className="self-stretch my-auto">
                      <span className=" text-zinc-600">الحالة :</span> نشطة
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center self-stretch p-3 my-auto bg-white rounded-lg border border-solid border-neutral-200">
                  <div className="flex gap-3 items-center">
                    <img
                      alt=""
                      loading="lazy"
                      src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/852f4a1a07d98dfdcb4139245618d3510981d0c6?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                      className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]"
                    />
                    <div className="self-stretch my-auto w-[95px]">
                      <span className=" text-zinc-600">المجال:</span> دورات
                      تقنية{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center  self-stretch p-3 my-auto bg-teal-200 rounded-lg border border-solid border-neutral-200 min-w-[240px] text-zinc-600 w-[408px]">
                  <div className="flex gap-3 items-center text-start">
                    <img
                      alt=""
                      loading="lazy"
                      src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/a74829c3b4e3f3c3b09448a404dffc7d7f2dc35b?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                    />
                    <div className="self-stretch my-auto">
                      البحث عن أسم برنامج .........
                    </div>
                  </div>
                </div>
              </div> */}

              {/* التاريخ */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-white p-3 text-start ">
                <label
                  htmlFor="history"
                  className="text-zinc-600 text-nowrap  "
                >
                  الترتيب حسب:
                </label>
                <input
                  type="date"
                  id="history"
                  placeholder=" التاريخ"
                  className="outline-none w-[50%] text-center text-gray-700"
                />
              </div>
              {/* جميع البرامج */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-white p-3 text-start">
                <label
                  className="text-zinc-600 text-nowrap  "
                  htmlFor="allPrograms"
                >
                  عرض :
                </label>
                <input
                  type="text"
                  id="allPrograms"
                  placeholder=" جميع البرامج"
                  className="outline-none w-[50%] text-center text-gray-700"
                />
              </div>
              {/* الحالة */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-white p-3 text-start">
                <label className="text-zinc-600 text-nowrap " htmlFor="status">
                  الحالة :
                </label>
                <input
                  type="text"
                  id="status"
                  placeholder=" نشطه"
                  className="outline-none w-[50%] text-center text-gray-700"
                />
              </div>
              {/* المجال */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-white p-3 text-start">
                <label
                  className="text-zinc-600 text-nowrap  "
                  htmlFor="category"
                >
                  المجال :
                </label>
                <input
                  type="text"
                  id="category"
                  placeholder=" دورات تقنية"
                  className="outline-none w-[50%] text-center text-gray-700"
                />
              </div>
              {/* البحث عن اسم البرنامج */}
              <div className="flex flex-col justify-center  self-stretch p-3 my-auto  bg-white rounded-lg border border-solid border-neutral-200  text-zinc-600 ">
                <div className="flex gap-3 items-center text-start">
                  <img
                    alt=""
                    loading="lazy"
                    src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/a74829c3b4e3f3c3b09448a404dffc7d7f2dc35b?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  />
                  <input
                    type="text"
                    name=""
                    className="outline-none w-full text-gray-700"
                    placeholder="البحث عن أسم برنامج ........."
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col px-10 pt-12 pb-6 mt-5 w-full text-sm font-bold text-gray-700  rounded-2xl shadow-sm max-w-[1593px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-end mr-20 max-w-full text-slate-400 w-[1231px] max-md:mr-2.5">
          <div className="text-slate-400">الإجراءات</div>
          <div className="text-slate-400">تاريخ البدء</div>
          <div className="text-slate-400">عدد المشاركين</div>
          <div className="text-slate-400">حالة البرنامج</div>
          <div className="text-right text-slate-400">اسم البرنامج</div>
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e737071d429db4006182fd52dabddc6bc1d106cc?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain mt-2.5 w-full aspect-[1000] stroke-[1px] stroke-slate-200 max-md:max-w-full"
        />
        <div className="flex gap-10 items-center self-center mt-6 ml-9 max-w-full w-[1279px]">
          <div className="flex gap-6 items-center self-stretch my-auto text-xs text-red-500 whitespace-nowrap">
            <div className="flex gap-1 self-stretch py-px my-auto w-16">
              <img
                alt=""
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/bba3bcf9674727f5b298776b3da5a2e7c4c87a54?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                className="object-contain shrink-0 aspect-[1.13] w-[17px]"
              />
              <div className="text-red-500">DELETE</div>
            </div>
            <img
              alt=""
              loading="lazy"
              srcSet="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=100 100w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=200 200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=400 400w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=800 800w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1200 1200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1600 1600w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=2000 2000w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.87] w-[43px]"
            />
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            14/06/21
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            40 متدرب
          </div>
          <div className="self-stretch px-8 py-1.5 leading-snug text-center text-white whitespace-nowrap bg-green-400 rounded-xl max-md:px-5">
            مكتمل
          </div>
          <div className="grow shrink self-stretch my-auto leading-snug text-right text-gray-700 w-[105px]">
            تدريب مهارات القيادة
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e737071d429db4006182fd52dabddc6bc1d106cc?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain mt-5 w-full aspect-[1000] stroke-[1px] stroke-slate-200 max-md:max-w-full"
        />
        <div className="flex gap-10 items-center self-center mt-3.5 ml-9 max-w-full w-[1279px]">
          <div className="flex gap-6 items-center self-stretch my-auto text-xs text-red-500 whitespace-nowrap">
            <div className="flex gap-1 self-stretch py-px my-auto w-16">
              <img
                alt=""
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/33597c2a9b8c2dd9d4d0081ee76c85f3e5844e27?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                className="object-contain shrink-0 aspect-[1.13] w-[17px]"
              />
              <div className="text-red-500">DELETE</div>
            </div>
            <img
              alt=""
              loading="lazy"
              srcSet="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=100 100w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=200 200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=400 400w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=800 800w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1200 1200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1600 1600w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=2000 2000w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.87] w-[43px]"
            />
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            14/06/21
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            40 متدرب
          </div>
          <div className="self-stretch px-5 py-1.5 leading-snug text-center text-white bg-blue-600 rounded-xl">
            قيد التنفيذ
          </div>
          <div className="grow shrink self-stretch my-auto leading-snug text-right text-gray-700 w-[105px]">
            تدريب مهارات القيادة
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e737071d429db4006182fd52dabddc6bc1d106cc?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain mt-5 w-full aspect-[1000] stroke-[1px] stroke-slate-200 max-md:max-w-full"
        />
        <div className="flex gap-10 items-center self-center mt-3 ml-9 max-w-full w-[1279px]">
          <div className="flex gap-6 items-center self-stretch my-auto text-xs text-red-500 whitespace-nowrap">
            <div className="flex gap-1 self-stretch py-px my-auto w-16">
              <img
                alt=""
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/14d64fcd0584ada09cc31fef62ffbc13e6c02160?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                className="object-contain shrink-0 aspect-[1.13] w-[17px]"
              />
              <div className="text-red-500">DELETE</div>
            </div>
            <img
              alt=""
              loading="lazy"
              srcSet="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=100 100w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=200 200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=400 400w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=800 800w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1200 1200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1600 1600w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=2000 2000w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.87] w-[43px]"
            />
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            14/06/21
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            40 متدرب
          </div>
          <div className="self-stretch px-6 py-1.5 leading-snug text-center text-white rounded-xl bg-slate-400 max-md:px-5">
            لم يبدأ بعد
          </div>
          <div className="grow shrink self-stretch my-auto leading-snug text-right text-gray-700 w-[105px]">
            تدريب مهارات القيادة
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e737071d429db4006182fd52dabddc6bc1d106cc?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain mt-5 w-full aspect-[1000] stroke-[1px] stroke-slate-200 max-md:max-w-full"
        />
        <div className="flex gap-10 items-center self-center mt-3.5 ml-9 max-w-full w-[1279px]">
          <div className="flex gap-6 items-center self-stretch my-auto text-xs text-red-500 whitespace-nowrap">
            <div className="flex gap-1 self-stretch py-px my-auto w-16">
              <img
                alt=""
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/888a26deca1ce50ef87041564cc9706b0580b6d5?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                className="object-contain shrink-0 aspect-[1.13] w-[17px]"
              />
              <div className="text-red-500">DELETE</div>
            </div>
            <img
              alt=""
              loading="lazy"
              srcSet="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=100 100w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=200 200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=400 400w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=800 800w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1200 1200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1600 1600w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=2000 2000w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e41baadc38b5922383aeb467f426b44e730a3514?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.87] w-[43px]"
            />
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            14/06/21
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            40 متدرب
          </div>
          <div className="self-stretch px-8 py-1.5 leading-snug text-center text-white whitespace-nowrap bg-green-400 rounded-xl max-md:px-5">
            مكتمل
          </div>
          <div className="grow shrink self-stretch my-auto leading-snug text-right text-gray-700 w-[105px]">
            تدريب مهارات القيادة
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e737071d429db4006182fd52dabddc6bc1d106cc?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain mt-5 w-full aspect-[1000] stroke-[1px] stroke-slate-200 max-md:max-w-full"
        />
        <div className="flex gap-3 items-center self-end mt-5 mr-20 text-right text-blue-600 max-md:mr-2.5">
          <div className="self-stretch my-auto">عرض المزيد من البرامج</div>
          <img
            alt=""
            loading="lazy"
            src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/8613a85d21799d89326600a69659def42ce2f351?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
            className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[2]"
          />
        </div>
      </div>
    </>
  );
}

export default ProgramsTable;
