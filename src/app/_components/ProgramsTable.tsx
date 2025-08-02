"use client"
import React, { useEffect, useState } from 'react'
type Program = {
  id: number,
  programName: string,
  status: string,
  trainees: string,
  date: string,
  category: string
}
function ProgramsTable() {

  const [programs, setPrograms] = useState<Program[]>([])
  const getAllProgram = async () => {
    try {
      const res = await fetch("/Data/programs.json"); // ✅ fetch from /public
      const data = await res.json();
      console.log(data.programs);
      setPrograms(data.programs);
      // const foundUser = data.users.find(
      //   (user: any) => user.email === email && user.password === password
      // );

      // console.log(foundUser);

      // if (foundUser) {
      //   localStorage.setItem("token", foundUser.token);
      //   myRoute.push("/dashboard");
      // }
    } catch (error) {
      // setError("Invalid Email or Password");
    }
  }
  useEffect(() => {
    getAllProgram();
  }, [])
  return (
    <>
      <div className="flex flex-col items-end px-20 pt-4 pb-7 mt-5 max-w-full font-bold text-right bg-white rounded-2xl shadow-sm w-[1593px] max-md:px-5">
        <div className="flex flex-col max-w-full w-[1025px]">
          <div className="text-lg text-gray-700 max-md:max-w-full">
            البرامج التدريبية :
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-5 w-full text-xs leading-snug text-black max-md:max-w-full">
            <div className="flex flex-col justify-center items-end self-stretch p-3 my-auto bg-white rounded-lg border border-solid border-neutral-200 min-w-[240px] text-zinc-600 w-[408px]">
              <div className="flex gap-3 items-center">
                <div className="self-stretch my-auto">
                  البحث عن أسم برنامج .........
                </div>
                <img
                  alt=""
                  loading="lazy"
                  src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/a74829c3b4e3f3c3b09448a404dffc7d7f2dc35b?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
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
                  <span className=" text-zinc-600">المجال:</span> دورات تقنية{" "}
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
                  <span className=" text-zinc-600">الترتيب حسب:</span> التاريخ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col px-10 pt-12 pb-6 mt-5 w-full text-sm font-bold text-gray-700 bg-white rounded-2xl shadow-sm max-w-[1593px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-end mr-20 max-w-full text-slate-400 w-[1231px] max-md:mr-2.5">
          <div className="text-right text-slate-400">اسم البرنامج</div>
          <div className="text-slate-400">حالة البرنامج</div>
          <div className="text-slate-400">عدد المشاركين</div>
          <div className="text-slate-400">تاريخ البدء</div>
          <div className="text-slate-400">الإجراءات</div>
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e737071d429db4006182fd52dabddc6bc1d106cc?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
          className="object-contain mt-2.5 w-full aspect-[1000] stroke-[1px] stroke-slate-200 max-md:max-w-full"
        />
        <div className="flex gap-10 items-center self-center mt-6 ml-9 max-w-full w-[1279px]">

          <div className="grow shrink self-stretch my-auto leading-snug text-right text-gray-700 w-[105px]">
            تدريب مهارات القيادة
          </div>

          <div className="self-stretch px-8 py-1.5 leading-snug text-center text-white whitespace-nowrap bg-green-400 rounded-xl max-md:px-5">
            مكتمل
          </div>

          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            40 متدرب
          </div>
          <div className="self-stretch my-auto leading-snug text-center text-gray-700">
            14/06/21
          </div>
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
        </div>
        
        <div className="flex gap-3 items-center self-end mt-5 mr-20 text-right text-blue-600 max-md:mr-2.5">
          <div className="self-stretch my-auto">عرض المزيد من البرامج</div>
          <img
            alt=""
            loading="lazy"
            src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/8613a85d21799d89326600a69659def42ce2f351?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
            className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[2]"
          />
        </div>
      </div> */}
      <div className="w-full px-10 pt-12 pb-6 mt-5 bg-white rounded-2xl shadow-sm text-sm font-bold text-gray-700 max-w-[1593px]">
        {/* رأس الجدول */}
        <div className="grid grid-cols-5 gap-4 px-10 text-slate-400 text-center max-md:grid-cols-2">
          <div>اسم البرنامج</div>
          <div>حالة البرنامج</div>
          <div>عدد المشاركين</div>
          <div>تاريخ البدء</div>
          <div>الإجراءات</div>
        </div>

        {/* فاصل */}
        <div className="border-t border-slate-200 my-4 w-full"></div>

        {/* صف البيانات */}
        <div className="grid grid-cols-5 gap-4 items-center text-center px-10 max-md:grid-cols-2">
          <div className="text-right">تدريب مهارات القيادة</div>
          <div className="px-4 py-1.5 bg-green-400 text-white rounded-xl">مكتمل</div>
          <div>40 متدرب</div>
          <div>14/06/21</div>

          {/* الإجراءات */}
          <div className="flex gap-4 items-center justify-center text-xs">
            <div className="flex items-center gap-1 text-red-500">
              <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.13677 10.875C1.13677 11.5625 1.75729 12.125 2.5157 12.125H8.0314C8.7898 12.125 9.41032 11.5625 9.41032 10.875V4.625C9.41032 3.9375 8.7898 3.375 8.0314 3.375H2.5157C1.75729 3.375 1.13677 3.9375 1.13677 4.625V10.875ZM9.41032 1.5H7.68666L7.19715 1.05625C7.07304 0.94375 6.89378 0.875 6.71452 0.875H3.83257C3.65331 0.875 3.47405 0.94375 3.34995 1.05625L2.86043 1.5H1.13677C0.757569 1.5 0.447311 1.78125 0.447311 2.125C0.447311 2.46875 0.757569 2.75 1.13677 2.75H9.41032C9.78952 2.75 10.0998 2.46875 10.0998 2.125C10.0998 1.78125 9.78952 1.5 9.41032 1.5Z" fill="#E53E3E" />
              </svg>
              <span>DELETE</span>
            </div>
            <div className="flex items-center gap-1">
              <span>EDIT</span>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.636841 7.47905V8.99905C0.636841 9.13905 0.758186 9.24905 0.912626 9.24905H2.5894C2.6611 9.24905 2.73281 9.22405 2.78245 9.17405L8.80559 3.71905L6.7372 1.84405L0.719576 7.29905C0.664419 7.34905 0.636841 7.40905 0.636841 7.47905ZM10.4051 2.26905C10.6203 2.07405 10.6203 1.75905 10.4051 1.56405L9.11447 0.394053C8.89936 0.199053 8.55187 0.199053 8.33675 0.394053L7.32738 1.30905L9.39577 3.18405L10.4051 2.26905V2.26905Z" fill="#2D3748" />
              </svg>

            </div>
          </div>
        </div>
        {programs && programs?.map((program: Program, index: number) => {
          const isLast = index === programs.length - 1;
          return (
            <div key={program.id} className="grid grid-cols-5 gap-4 items-center text-center px-10 max-md:grid-cols-2 my-3">
              <div className="text-right">{program?.programName}</div>
              <div className="px-4 py-1.5 bg-green-400 text-white rounded-xl">مكتمل</div>
              <div>{program?.trainees}</div>
              <div>{program?.date}</div>

              {/* الإجراءات */}
              <div className="flex gap-4 items-center justify-center text-xs">
                <div className="flex items-center gap-1 text-red-500">
                  <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.13677 10.875C1.13677 11.5625 1.75729 12.125 2.5157 12.125H8.0314C8.7898 12.125 9.41032 11.5625 9.41032 10.875V4.625C9.41032 3.9375 8.7898 3.375 8.0314 3.375H2.5157C1.75729 3.375 1.13677 3.9375 1.13677 4.625V10.875ZM9.41032 1.5H7.68666L7.19715 1.05625C7.07304 0.94375 6.89378 0.875 6.71452 0.875H3.83257C3.65331 0.875 3.47405 0.94375 3.34995 1.05625L2.86043 1.5H1.13677C0.757569 1.5 0.447311 1.78125 0.447311 2.125C0.447311 2.46875 0.757569 2.75 1.13677 2.75H9.41032C9.78952 2.75 10.0998 2.46875 10.0998 2.125C10.0998 1.78125 9.78952 1.5 9.41032 1.5Z" fill="#E53E3E" />
                  </svg>
                  <span>DELETE</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>EDIT</span>
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.636841 7.47905V8.99905C0.636841 9.13905 0.758186 9.24905 0.912626 9.24905H2.5894C2.6611 9.24905 2.73281 9.22405 2.78245 9.17405L8.80559 3.71905L6.7372 1.84405L0.719576 7.29905C0.664419 7.34905 0.636841 7.40905 0.636841 7.47905ZM10.4051 2.26905C10.6203 2.07405 10.6203 1.75905 10.4051 1.56405L9.11447 0.394053C8.89936 0.199053 8.55187 0.199053 8.33675 0.394053L7.32738 1.30905L9.39577 3.18405L10.4051 2.26905V2.26905Z" fill="#2D3748" />
                  </svg>

                </div>
              </div>
            </div>
          )
        })}


        <div className="flex items-center justify-end mt-5 gap-2 text-blue-600 text-sm pr-10">
          <span>عرض المزيد من البرامج</span>
          <img
            src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/8613a85d21799d89326600a69659def42ce2f351?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
            className="w-2.5"
            alt=""
          />
        </div>
      </div>

    </>
  )
}

export default ProgramsTable
