import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    useEffect(() => {
            AOS.init();
        }, [])
    
  return (
    <>

       <section id='about' name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 font-sans'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[100px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8'>
                        <p className='text-4xl font-bold inline border-b-8 border-[#C23B22]'>About</p>
                    </div>

                    <div>

                    </div>

                </div>

                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold' data-aos='fade-right' data-aos-duration='1000'>
                        <p>Hi,  I am <span className='text-[#C23B22]'>KRITH</span> Please take a look of my Projects,Or Read My Blogs <span className='text-[#C23B22]'></span>.</p>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='1000'>
                        <p>
                    
                            I'm a software developer with a strong foundation in Java and Data Structures & Algorithms, and an active contributor in tech communities like IEEE and DevComm. I’ve led teams in national hackathons (IIT Delhi, IIIT Delhi) and conducted technical sessions as an instructor. I enjoy building efficient backend systems and learning new tools to solve meaningful problems. Always open to collaboration and excited about what technology can build next! 🚀
                        </p>
                    </div>

                </div>

            </div>

        </section>

    </>
		
  )
}

export default About