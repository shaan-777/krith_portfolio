import TypeWritingEffect from './TypeWritingEffect';

const Hero = () => {
  const socialMediaLinks = [
    'https://github.com/',
    'https://www.linkedin.com/in/krith-thakker-284709286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app0', // Corrected LinkedIn link
    'https://leetcode.com/u/S_H_A_A_N/'
  ];

  const socialMediaImages = [
    'https://cdn-icons-png.flaticon.com/512/25/25231.png', // GitHub logo
    'https://cdn-icons-png.flaticon.com/512/174/174857.png', // LinkedIn logo
    'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' // LeetCode logo
  ];

  return (
    <div id="home">
      <div className="relative min-h-screen">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* Left side */}
            <div className="flex flex-col justify-center pt-32 lg:pt-40 ml-20 mb-20">
              <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                <span className="text-cyan-600 md:text-6xl text-5xl">Hello!<br /></span>
                My Name is <span className="text-red-500">Krith Thakkar</span>
              </h1>
              <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                <TypeWritingEffect />
              </h3>
              <p className="text-xl text-cyan-600 mb-8 leading-relaxed max-w-lg">
                 I'm a software developer with a strong foundation in Java and Data Structures & Algorithms, and an active contributor in tech communities like IEEE and DevComm. I’ve led teams in national hackathons (IIT Delhi, IIIT Delhi) and conducted technical sessions as an instructor. I enjoy building efficient backend systems and learning new tools to solve meaningful problems. Always open to collaboration and excited about what technology can build next! 🚀
              </p>
              <div className="flex flex-wrap">
                <div className="flex gap-4">
                  {socialMediaLinks.map((link, indx) => (
                    <a 
                      key={link} 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cursor-pointer"
                    >
                      <img 
                        src={socialMediaImages[indx]} 
                        alt="Social Media" 
                        className="w-10 p-1 h-10  bg-white rounded-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className="relative h-[600px] lg:h-screen mr-10">
              <spline-viewer url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"></spline-viewer>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Hero;
