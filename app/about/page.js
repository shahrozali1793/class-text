import React from 'react'
import Image from 'next/image'
import ImageCard from '../components/ImageCard';
export default function About() {
  const data = [
    {
      image: "/assets/one.jpg",
      title: "Psychiatrist",
      desc: " In my practice as a psychiatrist, I am dedicated to providing a safe and compassionate space for individuals to explore and understand their thoughts, emotions, and behaviors. Through collaborative dialogue, I strive to empower my patients to navigate life's challenges and discover their inner strengths. By employing evidence-based therapeutic approaches, I aim to tailor treatment plans to each individual's unique needs. Whether addressing mood disorders, anxiety, trauma, or other mental health concerns, my goal is to foster a supportive therapeutic alliance that promotes personal growth and well-being. Together, we work towards developing coping strategies, enhancing self-awareness, and fostering resilience. I believe in the transformative power of self-discovery and am committed to guiding individuals on their journey towards improved mental health and overall fulfillment. "
    },
    {
      image: "/assets/two.jpg",
      title: "Gynaecologist",
      desc: " As a gynecologist, my primary focus is on the reproductive health and well-being of women. I specialize in the diagnosis and treatment of a wide range of gynecological conditions, including menstrual disorders, reproductive system infections, and hormonal imbalances. My practice encompasses various aspects of women's health, from family planning and pregnancy care to the management of gynecological cancers. Through compassionate and patient-centered care, I aim to create a supportive environment where women can discuss their concerns openly. I perform routine screenings, such as Pap smears and mammograms, to ensure early detection of potential issues. Whether guiding women through the stages of pregnancy, offering contraceptive counseling, or addressing gynecological concerns, my goal is to empower women to make informed decisions about their reproductive health. I am committed to staying abreast of the latest advancements in gynecology to provide the highest standard of care for my patients. "
    },
    {
      image: "/assets/three.jpg",
      title: "Orthopedic",
      desc: " As an orthopedic specialist, my practice revolves around the musculoskeletal system, encompassing bones, joints, muscles, ligaments, and tendons. I am dedicated to diagnosing and treating a variety of orthopedic conditions, ranging from fractures and sports injuries to degenerative joint diseases like arthritis. Utilizing both surgical and non-surgical interventions, I aim to restore function, alleviate pain, and improve the overall mobility of my patients. Through a comprehensive approach, I work closely with individuals to develop personalized treatment plans that consider their unique needs and goals. Whether it involves joint replacement surgery, arthroscopic procedures, or rehabilitation therapies, my objective is to enhance the quality of life for those experiencing orthopedic issues. I am committed to staying informed about the latest advancements in orthopedic care to provide the most effective and evidence-based treatments, and I prioritize clear communication to ensure patients are actively involved in their care journey. "
    },
    {
      image: "/assets/four.jpg",
      title: "Ophthalmologist",
      desc: "As an ophthalmologist, my primary focus is on the health and well-being of the eyes. I specialize in diagnosing and treating a wide range of ocular conditions, from refractive errors like nearsightedness and farsightedness to more complex issues such as glaucoma, cataracts, and retinal diseases. Through comprehensive eye examinations, advanced diagnostic technologies, and a commitment to staying abreast of the latest developments in ophthalmic medicine, I aim to provide accurate diagnoses and effective treatments for my patients. Whether prescribing corrective lenses, performing surgical interventions, or managing chronic eye diseases, my goal is to optimize and preserve vision. I prioritize open communication with my patients, ensuring they are well-informed about their eye health and actively involved in making decisions about their treatment plans. By combining expertise with empathy, I strive to contribute to the overall well-being of individuals by safeguarding the precious gift of sight."
    },
    {
      image: "/assets/five.jpg",
      title: "Urologist",
      desc: " As a urologist, my focus is on the comprehensive care of the genitourinary system, addressing both male and female urological health. My practice involves the diagnosis and treatment of conditions affecting the kidneys, bladder, prostate, and reproductive organs. I am dedicated to providing personalized and patient-centered care, utilizing the latest advancements in urological medicine. From managing urinary tract infections and kidney stones to addressing issues related to sexual health and fertility, my goal is to help patients achieve optimal urological wellness. Through open communication and a collaborative approach, I work with individuals to develop tailored treatment plans that consider their unique medical history and preferences. Whether it's preventative care, medical intervention, or surgical procedures, my commitment is to support patients in maintaining and improving their urological health for a better quality of life. "
    },
  ]

  return (
    <>
              <div className=""> <ImageCard heading="About Us" description="Leading the Way in Medical Excellence" /></div>

      <div>
        {data.map((item, i) => {
          const isEven = i % 2 === 0;
          return <>
            <div key={i} className="my-32">
              {isEven ? 
              <div>
                <div className="flex justify-evenly gap-10 ">
                  <div className="w-[40%]"> <Image src={item.image} width={1000} height={1000} />  </div>
                  <div className=" w-[50%] ">
                    <div className=""> <p className=' font-bold text-2xl text-gray-700  py-5 '>{item.title}</p> </div>
                    <div className="text-gray-700">{item.desc}</div>
                  </div>
                </div>
              </div> 
              :
              <div>
              <div className="flex justify-evenly gap-10 ">
                <div className=" w-[50%] ">
                  <div className=""> <p className=' font-bold text-2xl text-gray-700  py-5 '>{item.title}</p> </div>
                  <div className="text-gray-700">{item.desc}</div>
                </div>
                <div className="w-[40%]"> <Image src={item.image} width={1000} height={1000} />  </div>
              </div>
            </div> 

              }
            </div>
          </>
        })}
      </div>
    </>
  )
}
