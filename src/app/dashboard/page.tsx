import React from 'react'
import SideBar from '../_components/SideBar'

function Dashboard() {
    return (
        <div className='flex bg-gray-50'>

            <div className="flex overflow-hidden flex-col items-start px-10 pt-8 pb-20  max-md:px-5 w-10/12">
                <div className="flex flex-wrap gap-4 self-stretch text-sm font-bold text-right text-zinc-600 max-md:max-w-full">

                    <section className="relative w-full">
                        {/* Background Section */}
                        <div className=" text-white rounded-xl p-6 h-48 flex items-center justify-end"
                            style={{ backgroundImage: "url('/img/bg.png')" }}>
                            <h1 className="text-lg font-semibold">شركة الرؤية المستقبلية للتقنيات</h1>
                        </div>

                        {/* User Card */}
                        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[96%] max-w-6xl bg-white/90 shadow-md rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 z-20">

                            {/* Left side: Buttons */}
                            <div className="flex gap-3">
                                <button className="bg-gray-100 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="..." /> {/* أيقونة تقارير */}
                                    </svg>
                                    التقارير والإحصائيات
                                </button>
                                <button className="bg-white text-sm px-4 py-2 rounded-full flex gap-3 items-center justify-between">
                                    معلومات عامة للمستخدم
                                    <div className=''><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_270)">
                                            <path d="M1.53123 3.64868V7.87938L5.65623 10.3088V6.0979L1.53123 3.64868Z" fill="#2D3748" />
                                            <path d="M6.3437 10.3088L10.4687 7.87938V3.64868L6.3437 6.0979V10.3088Z" fill="#2D3748" />
                                            <path d="M10.125 3.09033L5.99995 0.684082L1.87495 3.09033L5.99995 5.49658L10.125 3.09033Z" fill="#2D3748" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_270">
                                                <rect width="11" height="11" fill="white" transform="translate(0.5 -0.00292969)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </div>
                                </button>
                            </div>

                            {/* Right side: User Info */}
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <h2 className="text-md font-semibold">اسم المستخدم</h2>
                                    <p className="text-sm text-gray-500">usermail@simmple.com</p>
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/75.jpg"
                                        alt="User profile"
                                        className="w-14 h-14 rounded-lg object-cover"
                                    />
                                    <button className="absolute bottom-0 right-0 bg-white border p-1 rounded-full shadow-sm">
                                        ✎
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <div className="mt-7 w-full max-w-[1598px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-end px-14 pt-7 pb-24 mx-auto w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-5 max-md:max-w-full">
                                <div className="flex flex-wrap gap-5 justify-between self-stretch max-md:max-w-full">
                                    <div className="flex flex-col justify-center px-2.5 py-1 my-auto text-xs bg-white rounded-lg border border-solid border-zinc-300 min-h-[22px] text-zinc-600">
                                        <div className="flex gap-3 justify-center items-center w-[63px]">
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/085dd0fcb525d2f4159587cc90371c04bb2440df?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                                                className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]"
                                            />
                                            <div className="self-stretch my-auto">الأسبوع الحالي</div>
                                        </div>
                                    </div>
                                    <div className="text-lg font-bold leading-snug text-right text-gray-700">
                                        آخر المستجدات في منشأتك
                                    </div>
                                </div>
                                <div className="flex gap-8 mt-12 text-sm font-bold leading-snug text-right text-gray-700 max-md:mt-10 max-md:mr-1">
                                    <div className="flex-auto text-gray-700">
                                        تم تسجيل 15 موظفًا جديدًا في دورة &quot;القيادة والإدارة&quot;
                                    </div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/570aae2639cb8d06b722ef3f34ce422e050decd7?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                                        className="object-contain shrink-0 my-auto w-4 aspect-square"
                                    />
                                </div>
                                <div className="flex gap-5 justify-between max-w-full text-xs font-bold text-right text-slate-400 w-[118px] max-md:mr-2.5">
                                    <div className="self-start text-slate-400">22 يناير 2025</div>
                                    <div className="shrink-0 w-0.5 border-2 border-solid bg-slate-200 border-slate-200 h-[57px]" />
                                </div>
                                <div className="flex gap-7 mt-3 text-sm font-bold leading-snug text-right text-gray-700">
                                    <div className="flex-auto text-gray-700">
                                        أكمل 10 موظفين دورة &quot;تحليل البيانات المتقدم&quot;
                                    </div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/ab1d93566967ece2ea05ce22ab4a3aab6d807c2f?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                                        className="object-contain shrink-0 self-start w-6 aspect-square"
                                    />
                                </div>
                                <div className="mr-16 text-xs font-bold text-right text-slate-400 max-md:mr-2.5">
                                    21 يناير 2025
                                </div>
                                <div className="flex gap-7 mt-14 text-sm font-bold leading-5 text-right text-gray-700 max-md:mt-10 max-md:mr-0.5">
                                    <div className="flex-auto text-gray-700">
                                        بعض الموظفين لم يكملوا دوراتهم في الوقت المحدد! مراجعة تقدمهم
                                        مطلوب
                                    </div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/14dfcd6b86219f51b05126f83112d58e3f51af5a?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                                        className="object-contain shrink-0 my-auto w-5 aspect-[1.11]"
                                    />
                                </div>
                                <div className="mt-1.5 mr-16 text-xs font-bold text-right text-slate-400 max-md:mr-2.5">
                                    19 يناير 2025
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                            <img
                                alt=""
                                loading="lazy"
                                src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/9805d10a979f16d2a1ab800f4c4d0d36b6890a07?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                                className="object-contain grow w-full rounded-none aspect-[0.93] max-md:mt-5"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow py-7 w-full bg-white rounded-2xl shadow-sm max-md:mt-5 max-md:max-w-full">
                                <img
                                    alt=""
                                    loading="lazy"
                                    srcSet="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/f1870bda4f2d5034102b7b3e4a12224512b78643?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=100 100w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/f1870bda4f2d5034102b7b3e4a12224512b78643?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=200 200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/f1870bda4f2d5034102b7b3e4a12224512b78643?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=400 400w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/f1870bda4f2d5034102b7b3e4a12224512b78643?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=800 800w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/f1870bda4f2d5034102b7b3e4a12224512b78643?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1200 1200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/f1870bda4f2d5034102b7b3e4a12224512b78643?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1600 1600w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/f1870bda4f2d5034102b7b3e4a12224512b78643?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=2000 2000w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/f1870bda4f2d5034102b7b3e4a12224512b78643?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                                    className="object-contain self-end mr-10 max-w-full aspect-[3.62] w-[116px] max-md:mr-2.5"
                                />
                                <div className="flex flex-col px-5 mt-4 max-md:pl-5 max-md:max-w-full">
                                    <div className="text-xs leading-5 text-right text-stone-500 max-md:mr-2.5 max-md:max-w-full">
                                        <span className="font-bold text-stone-500">
                                            شركة الرؤية المستقبلية للتقنيات
                                        </span>{" "}
                                        هي إحدى الشركات السعودية الرائدة في مجال التحول الرقمي، وتسعى
                                        إلى تمكين كوادرها من خلال برامج تدريبية متخصصة تهدف إلى رفع
                                        الكفاءة وتعزيز الإنتاجية داخل بيئة العمل.
                                    </div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/16d716db598d2e655c749b7cf942f1b512e455c1?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                                        className="object-contain mt-4 ml-3 w-full max-md:max-w-full"
                                    />
                                    <div className="flex flex-col justify-center self-end mt-4 max-w-full text-sm w-[227px] max-md:mr-2.5">
                                        <div className="flex flex-col w-full text-right text-gray-700">
                                            <div>
                                                <span className="font-bold text-blue-600">
                                                    اسم المنشأة:{" "}
                                                </span>
                                                شركة الرؤية المستقبلية للتقنيات
                                            </div>
                                            <div className="mt-3">
                                                <span className="font-bold text-blue-600">المجال:</span>{" "}
                                                تقنية معلومات
                                            </div>
                                            <div className="mt-3">
                                                <span className="font-bold text-blue-600">
                                                    عدد الموظفين:
                                                </span>{" "}
                                                125 موظف
                                            </div>
                                            <div className="mt-3">
                                                <span className="font-bold text-blue-600">المدينة: </span>
                                                الرياض، السعودية
                                            </div>
                                            <div className="mt-3">
                                                <span className="font-bold text-blue-600">
                                                    خطة الاشتراك:{" "}
                                                </span>
                                                باقة الشركات المتقدمة
                                            </div>
                                            <div className="mt-3">
                                                <span className="font-bold text-blue-600">
                                                    تاريخ التسجيل:
                                                </span>{" "}
                                                12 فبراير 2024
                                            </div>
                                            <div className="mt-3">
                                                <span className="font-bold text-blue-600">
                                                    تاريخ إنتهاء الإشتراك :
                                                </span>{" "}
                                                12 فبراير 2025
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-center mt-5 w-full font-bold text-blue-600">
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/e655b72b25dbe455b79557aa1b8cafa14daf82cc?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
                                                className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[95px]"
                                            />
                                            <div className="self-stretch my-auto w-[104px]">
                                                حسابات التواصل :
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className="flex flex-col px-10 pt-12 pb-6 mt-5 w-full text-sm font-bold text-gray-700 bg-white rounded-2xl shadow-sm max-w-[1593px] max-md:px-5 max-md:max-w-full">
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
            </div>
            <div className='w-2/12 pt-8 flex justify-center'>
                <SideBar />
            </div>
        </div>
    )
}

export default Dashboard
