import React from "react";

export default function Getapp() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden shadow-lg p-16 mb-5 bg-body rounded">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Machine Learning
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                AI ตรวจวินิจฉัยโรคหัวใจ
                </h2>
                <p className="leading-relaxed">
                โรคหัวใจ (Heart Diseases) หมายถึง โรคต่าง ๆ ที่ส่งผลกระทบต่อการทำงานของหัวใจ 
                โดยความผิดปกติที่เกิดขึ้นในแต่ละส่วนของหัวใจ ทำให้โรคหัวใจแต่ละชนิดจะมีอาการต่างกันไป 
                บางชนิดเกี่ยวข้องกับหลอดเลือด (Vascular diseases) ที่พบได้บ่อย เช่น โรคหลอดเลือดหัวใจ 
                โรคหัวใจเต้นผิดจังหวะ โรคกล้ามเนื้อหัวใจ โรคหัวใจพิการแต่กำเนิด โรคลิ้นหัวใจ โรคติดเชื้อบริเวณหัวใจ 
                ทั้งนี้โรคหัวใจหลาย ๆ โรค ความผิดปกติในช่วงแรก ๆ อาจไม่มีอาการแสดง ทำให้ผู้ป่วยไม่รู้ตัว 
                จนอาจทำให้เสียชีวิตเมื่อโรครุนแรงขึ้น การตรวจวินิจฉัยรวดเร็วจึงเป็นสิ่งจำเป็น
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4"
                href="http://127.0.0.1:8000/" target="_blank" rel= "noopener noreferer"
                >
              คลิกที่นี่เพื่อตรวจโรคหัวใจ
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Deep Learning
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  AI ตรวจวินิจฉัยโรคมะเร็งผิวหนัง
                </h2>
                <p className="leading-relaxed">
                มะเร็งผิวหนัง คือภาวะที่เกิดจากการเจริญเติบโตของเซลล์ผิวหนังอย่างผิดปกติ และไม่สามารถควบคุมได้ ซึ่งสามารถเกิดขึ้นได้ในทุกชั้นของผิวหนัง โดยมะเร็งผิวหนังแบ่งออกเป็นหลายประเภท แต่ที่พบได้บ่อยที่สุดมี 3 ประเภทหลัก ได้แก่
มะเร็งเบเซลเซลล์  (Basal cell carcinoma) เป็นชนิดที่พบมากที่สุด โดยเกิดขึ้นในเซลล์ฐานของชั้นหนังกำพร้า ลักษณะของมะเร็งชนิดนี้มักเป็นตุ่มเล็ก ๆ สีใสหรือสีเนื้อ ซึ่งอาจแตกเป็นแผลหรือมีเลือดออก
มะเร็งสเควมัสเซลล์ (Squamous cell carcinoma) เกิดขึ้นในเซลล์ชั้นบนของหนังกำพร้า มักมีลักษณะเป็นแผลที่มีขอบยกสูงหรือเป็นตุ่มแข็ง และมักเกิดในบริเวณที่โดนแสงแดดมาก เช่น ใบหน้า คอ และมือ
มะเร็งเมลาโนมา (Melanoma) เป็นมะเร็งผิวหนังที่ร้ายแรงที่สุด เกิดขึ้นในเซลล์เมลาโนไซต์ที่ผลิตเม็ดสีผิว มักมีลักษณะเป็นไฝหรือจุดสีดำที่ผิดปกติ หากไม่รีบทำการรักษา มะเร็งชนิดนี้สามารถแพร่กระจายไปยังอวัยวะอื่น ๆ ในร่างกายได้อย่างรวดเร็ว
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  ChatGPT
                </span>
                {/* <span className="text-sm text-gray-500">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  การสนทนา Chatbot
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
