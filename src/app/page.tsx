"use client";

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear().toString();
    }

    const smoothScrollHandler = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (targetId) {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', smoothScrollHandler as EventListener);
    });

    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
          nav.classList.remove('bg-white/10');
        } else {
          nav.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
          nav.classList.add('bg-white/10');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const htmlSection = section as HTMLElement;
      htmlSection.style.opacity = '0';
      htmlSection.style.transform = 'translateY(20px)';
      htmlSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(htmlSection);
    });

    const heroSection = document.querySelector('section') as HTMLElement;
    if (heroSection) {
      heroSection.style.opacity = '1';
      heroSection.style.transform = 'translateY(0)';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', smoothScrollHandler as EventListener);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="text-primary-red font-bold text-2xl">MERKURIUS</div>
                <div id="nav-links" className="hidden md:flex space-x-6 transition-colors">
                    <a href="#about" className="hover:text-primary-red transition-colors">เกี่ยวกับเรา</a>
                    <a href="#services" className="hover:text-primary-red transition-colors">บริการ</a>
                    <a href="#careers" className="hover:text-primary-red transition-colors">ร่วมงานกับเรา</a>
                </div>
            </div>
        </div>
    </nav>

    {/* Hero Section */}
    <section className="min-h-[calc(100vh-64px)] bg-hero-pattern bg-hero-cover relative overflow-hidden bg-gradient-to-br from-gray-900 to-secondary-black">
        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-32 pb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-black space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                            SMART<br />
                            <span className="text-primary-red">PLANNING</span>
                        </h1>
                        <h2 className="text-4xl text-primary-red md:text-5xl font-bold">
                            SECURE<br />
                            <span className="text-primary-red">FUTURE</span>
                        </h2>
                    </div>

                    <p className="text-xl bg-white/80 backdrop-blur-sm py-1 inline-block pr-4 rounded-full text-black mb-8">
                        Financial Planning | Insurance | Legacy Solutions
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            className="cursor-pointer bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-red/30">
                            Booking Consultation
                        </button>
                        <button
                            className="cursor-pointer bg-white/80 backdrop-blur-xs border-2 border-secondary-black text-secondary-black hover:bg-secondary-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                            Join Our Team
                        </button>
                    </div>
                </div>
                {/* Floating Icons */}
                <div className="relative hidden md:block">
                    <div
                        className="absolute -top-36 right-0 w-20 h-20 bg-primary-red rounded-full opacity-80 animate-float">
                    </div>
                    <div
                        className="absolute -top-56 left-1/4 w-16 h-16 bg-accent-yellow rounded-full opacity-60 animate-float-delay">
                    </div>
                    <div
                        className="absolute bottom-0 right-2/4 w-12 h-12 bg-secondary-black rounded-full opacity-70 animate-float">
                    </div>
                    <div
                        className="absolute bottom-0 -left-56 w-24 h-24 bg-secondary-purple rounded-full opacity-50 animate-float-delay">
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-primary-red mb-6">Our Vision</h2>
                    <p className="text-2xl font-semibold mb-8 text-secondary-black">
                        "ผมต้องการให้คนไทยมีความแข็งแรงทางการเงิน"
                    </p>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                        Merkurius ก่อตั้งเมื่อ กุมภาพันธ์ 2024 แต่ตัวผม อยู่ในวงการการเงิน การลงทุน มากว่า 10 ปีแล้ว
                        เราได้เห็นการเปลี่ยนแปลงหลายๆ อย่างในโลกการเงินมากมาย
                    </p>

                    <p>
                        แต่สิ่งสำคัญก็คือ การบริหารเงินของคนไทย คนรอบๆ ตัวเรา ยังขาดความรู้ ความเข้าใจอีกมาก ซึ่ง
                        ผมมีความตั้งใจ มี Passion มาตั้งแต่เริ่มงานนี้ว่า จะต้องทำให้เขารู้จักการวางแผนการเงิน
                        เพื่อชีวิตของเขาเอง ให้มีความสุขทุกช่วงของชีวิตให้ได้
                    </p>

                    <div
                        className="bg-secondary-black p-8 rounded-2xl text-center my-12">
                        <p className="text-xl font-semibold text-white">
                            "การดูแลลูกค้าอย่างยั่งยืน คือสิ่งที่สำคัญกับลูกค้ามากที่สุด"
                        </p>
                        <p className="mt-4 text-lg opacity-90 text-white/90">
                            - กานต์ มุกดาสนิท, CFP®
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Core Values Section */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-secondary-black mb-4">วัฒนธรรมองค์กรของเรา</h2>
                <p className="text-xl text-gray-600">Core Values</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
                    <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">ความซื่อสัตย์</h3>
                    <p className="text-gray-600 leading-relaxed">มีความซื่อสัตย์จริงใจต่อกัน ทั้งตัวเอง ทีมงาน และลูกค้า</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
                    <div className="w-16 h-16 bg-secondary-black rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">ความรับผิดชอบ</h3>
                    <p className="text-gray-600 leading-relaxed">รับผิดชอบในงานที่ทำ และงานที่ได้รับมอบหมาย</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
                    <div
                        className="w-16 h-16 bg-secondary-purple rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">ไม่หยุดเรียนรู้</h3>
                    <p className="text-gray-600 leading-relaxed">ไม่หยุดพัฒนาตัวเอง ก้าวทันโลกอยู่เสมอ
                        เพื่อนำมาต่อยอดให้กับลูกค้า</p>
                </div>
            </div>
        </div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-20 bg-secondary-black">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-white mb-4">บริการของที่ปรึกษาการเงิน</h2>
                <p className="text-xl text-gray-300">Financial Advisory Services</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-2xl text-black card-hover">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">วางแผนรายรับรายจ่าย</h3>
                    <p className="text-sm opacity-90">การเก็บเงินเบื้องต้น วิเคราะห์การใช้จ่าย (Cashflow Analysis)</p>
                </div>

                <div className="bg-white p-6 rounded-2xl text-black card-hover">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">วางแผนความเสี่ยง</h3>
                    <p className="text-sm opacity-90">Risk Management/Insurance Planning</p>
                </div>

                <div className="bg-white p-6 rounded-2xl text-black card-hover">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">วางแผนการลงทุน</h3>
                    <p className="text-sm opacity-90">Investment Planning</p>
                </div>

                <div className="bg-white p-6 rounded-2xl text-black card-hover">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">วางแผนเกษียณอย่างมั่นใจ</h3>
                    <p className="text-sm opacity-90">Retirement Planning</p>
                </div>

                <div className="bg-white p-6 rounded-2xl text-black card-hover">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">วางแผนเก็บเงินสำหรับบุตร</h3>
                    <p className="text-sm opacity-90">Education Planning</p>
                </div>

                <div className="bg-white p-6 rounded-2xl text-black card-hover">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">วางแผนส่งต่อมรดก</h3>
                    <p className="text-sm opacity-90">Legacy Planning</p>
                </div>
            </div>
        </div>
    </section>

    {/* Careers Section */}
    <section id="careers" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-secondary-black mb-4">MERKURIUS | CAREERS</h2>
                <div className="flex justify-center flex-wrap gap-8 text-2xl font-bold text-primary-red">
                    <span>INCOME</span>
                    <span>INDEPENDENT</span>
                    <span>IMPACT</span>
                    <span>IMPROVE</span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">รับสมัครที่ปรึกษาการเงินและตัวแทนประกันชีวิต AIA
                    </h3>

                    <div className="mb-8">
                        <h4 className="text-xl font-semibold text-secondary-black mb-4">Why AIA</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AIA จะมีโครงการปั้นตัวแทนชีวิตที่ยอดเยี่ยม คือ FA
                            และการเริ่มต้นสู่การเป็นที่ปรึกษาการเงินชั้นต้น
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            รวมถึงการเรียนรู้แบบประกันต่างๆ ซึ่งเป็นขั้นพื้นฐานของการวางแผนการเงิน ต่อยอดสู่การเป็น
                            ที่ปรึกษาการเงิน CFP® หรือ ที่ปรึกษาการลงทุนได้ในอนาคต
                        </p>
                    </div>
                </div>

                {/* Position Cards */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* FA Standard */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                        <div className="bg-primary-red text-white px-4 py-2 rounded-lg inline-block mb-4">
                            <h4 className="text-xl font-bold">FA Standard</h4>
                        </div>

                        <h5 className="font-semibold text-gray-800 mb-3">Roles and Responsibility</h5>
                        <p className="text-gray-700 mb-4">
                            ถ้าคุณต้องการเป็นที่ปรึกษาการเงินแบบเรียนลัด การเป็น FA Standard
                            จะตอบโจทย์คุณและย่นระยะการศึกษาเรื่องแบบประกันต่างๆของ AIA ได้อย่างรวดเร็ว
                        </p>

                        <h5 className="font-semibold text-gray-800 mb-3">Qualifications</h5>
                        <ul className="text-gray-700 space-y-2 mb-6">
                            <li>• อายุ ไม่เกิน 50 ปี</li>
                            <li>• จบปริญญาตรีขึ้นไป</li>
                            <li>• ถ้ามี IC License จะรับพิจารณาเป็นพิเศษ</li>
                            <li>• มีเป้าหมาย วินัยสม่ำเสมอ</li>
                        </ul>
                    </div>

                    {/* FA Prime */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                        <div className="bg-secondary-black text-white px-4 py-2 rounded-lg inline-block mb-4">
                            <h4 className="text-xl font-bold">FA Prime</h4>
                        </div>

                        <h5 className="font-semibold text-gray-800 mb-3">Roles and Responsibility</h5>
                        <p className="text-gray-700 mb-4">
                            ถ้าคุณต้องการทำอาชีพนี้ให้เติบโตและยั่งยืนมากที่สุด อยากท้าทายความสามารถตัวเอง FA Prime
                            จะตอบโจทย์คุณมากที่สุด การทำงานจะเข้มข้น ติวเข้มข้น
                        </p>

                        <h5 className="font-semibold text-gray-800 mb-3">Qualifications</h5>
                        <ul className="text-gray-700 space-y-2 mb-6">
                            <li>• อายุ ไม่เกิน 50 ปี</li>
                            <li>• จบปริญญาตรีขึ้นไป</li>
                            <li>• มี IC License</li>
                            <li>• มีประสบการณ์ด้านการเงินมาไม่น้อยกว่า 2 ปี</li>
                        </ul>
                    </div>

                    {/* FA-X */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                        <div className="bg-secondary-purple text-white px-4 py-2 rounded-lg inline-block mb-4">
                            <h4 className="text-xl font-bold">FA-X</h4>
                        </div>

                        <p className="text-gray-700 mb-4">
                            ถ้าต้องการเป็นผู้บริหารหน่วย และเคยทำงานฝ่ายบริหารระดับสูงมาก่อน
                            การจบโครงการอย่างรวดเร็วและขึ้นเป็นผู้บริหารของ AIA อย่างรวดเร็วจะตอบโจทย์คุณมากที่สุด
                        </p>

                        <h5 className="font-semibold text-gray-800 mb-3">Qualifications</h5>
                        <ul className="text-gray-700 space-y-2 mb-6">
                            <li>• อายุ ไม่เกิน 50 ปี</li>
                            <li>• มี IC License</li>
                            <li>• มีประสบการณ์ด้านการเงินมาไม่น้อยกว่า 8 ปี</li>
                            <li>• เคยเป็นหัวหน้าทีม หรือบริหารทีมงาน</li>
                        </ul>
                    </div>

                    {/* Standard Agent */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                        <div className="bg-accent-yellow text-white px-4 py-2 rounded-lg inline-block mb-4">
                            <h4 className="text-xl font-bold">Standard Agent</h4>
                        </div>

                        <h5 className="font-semibold text-gray-800 mb-3">Roles and Responsibility</h5>
                        <p className="text-gray-700 mb-4">
                            การเป็นตัวแทนประกันชีวิต ไม่ได้ต้องการแค่เน้นยอดอย่างเดียว
                            แต่เราต้องเน้นให้แผนประกันตอบโจทย์ลูกค้ามากที่สุด เราจะไม่ใช่เซลส์ขายประกัน
                            แต่เราคือที่ปรึกษาด้านประกัน
                        </p>

                        <h5 className="font-semibold text-gray-800 mb-3">Qualifications</h5>
                        <ul className="text-gray-700 space-y-2 mb-6">
                            <li>• จบปริญญาตรีขึ้นไป</li>
                            <li>• ถ้ามี IC License จะรับพิจารณาเป็นพิเศษ</li>
                            <li>• อยากทำให้คนไทยมีความรู้เรื่องการเงินมากขึ้น</li>
                            <li>• มีเป้าหมาย วินัยสม่ำเสมอ</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-secondary-black p-12 rounded-3xl">
                        <h3 className="text-4xl font-bold mb-4 text-white">Join our team</h3>
                        <p className="text-xl mb-2 text-white/90">where LOGIC meets CREATIVITY</p>
                        <p className="text-lg mb-8 text-white/80">สร้างอนาคตทางการเงินที่มั่นคง ร่วมกับเรา</p>
                        <button
                            className="bg-primary-red hover:bg-red-600 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all transform hover:scale-105 shadow-lg">
                            สมัครงาน
                        </button>
                        <p className="text-sm mt-6 text-white/70">
                            หรือหากมีข้อสงสัย สามารถติดต่อสอบถามความเพิ่มเติมได้ที่<br />
                            <span className="font-semibold">contact@merkurius.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                    <h3 className="text-3xl font-bold mb-4 text-primary-red">MERKURIUS</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        เราเชื่อว่าการดูแลลูกค้าอย่างยั่งยืน คือสิ่งที่สำคัญกับลูกค้ามากที่สุด<br />
                        Financial Planning | Insurance | Legacy Solutions
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-secondary-black hover:bg-secondary-black p-3 rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-secondary-black hover:bg-secondary-black p-3 rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-secondary-black hover:bg-secondary-black p-3 rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">เมนูหลัก</h4>
                    <ul className="space-y-2">
                        <li><a href="#about"
                                className="text-gray-300 hover:text-primary-red transition-colors">เกี่ยวกับเรา</a></li>
                        <li><a href="#services"
                                className="text-gray-300 hover:text-primary-red transition-colors">บริการ</a></li>
                        <li><a href="#careers"
                                className="text-gray-300 hover:text-primary-red transition-colors">ร่วมงานกับเรา</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-primary-red transition-colors">ติดต่อเรา</a>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">บริการ</h4>
                    <ul className="space-y-2">
                        <li><a href="#"
                                className="text-gray-300 hover:text-primary-red transition-colors">วางแผนการเงิน</a></li>
                        <li><a href="#"
                                className="text-gray-300 hover:text-primary-red transition-colors">วางแผนความเสี่ยง</a>
                        </li>
                        <li><a href="#"
                                className="text-gray-300 hover:text-primary-red transition-colors">วางแผนการลงทุน</a>
                        </li>
                        <li><a href="#"
                                className="text-gray-300 hover:text-primary-red transition-colors">วางแผนเกษียณ</a></li>
                        <li><a href="#"
                                className="text-gray-300 hover:text-primary-red transition-colors">วางแผนส่งต่อมรดก</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                <p className="text-gray-400">
                    © <span id="current-year"></span> Merkurius. All rights reserved. |
                    <a href="#" className="hover:text-primary-red transition-colors">Privacy Policy</a> |
                    <a href="#" className="hover:text-primary-red transition-colors">Terms of Service</a>
                </p>
            </div>
        </div>
    </footer>
    </>
  );
}
