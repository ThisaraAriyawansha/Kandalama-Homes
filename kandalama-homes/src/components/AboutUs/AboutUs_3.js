import React from "react";

const teamMembers = [
  {
    name: "Mr. Upali Kulathunga",
    role: "C.E.O",
    image: "https://s3-alpha-sig.figma.com/img/e0bb/46dd/d9c2b2e390787da7f71b2874bef33b03?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZhYtISMIG8NZhhwpwb4Fi2YQ9kxiDMJPsb3zrvJPprLs21Ib0-O-bdN1nezZAoXE54QYX05YC~xRYbFkI-zDZEvExu0sxzfZK-N-LGme2eI~ruEOr4S6RD1IQrPBDJn-~WO0xSrBZG-8gUlTV9pkFmyXQ4~3KKyMkPn4DCQpOPqAt-StWYa5Fa4ZnAauFI4QHQGKBsQ~nSdz~9fDt9YOdzsqqfya5Xkclo1cSJzwolgjMyCRkxTMBIjaxGtMfrXMiTvuj8TJ2~WnDyCJE~YVTp9UguGq9wbF-pnJjgJ~TB1z95BTkgA7HitfMl5Qn1adIN4MYf~r7FJ0Gl12x4Yx~w__",
  },
  {
    name: "Mr. Upali Kulathunga",
    role: "H.R Manager",
    image: "https://s3-alpha-sig.figma.com/img/f791/ee9d/6216ba943ecd829641d853f639d64d92?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFNo~iFQKoez7YR7HaCFKKl7XBwCJ4bCVcpDc-F1qtNvh1UXfeBcV4RzzYPb84isCEZqE6gSUw~VmVpJy7ZyRE8jq77WXhs3wp9GxJhoaprscjsu9O5vkLWjvww6KBF3JTlTB9iJZtJ5YXVTPIHpSrMgY2kKKtv7uRkgwJnQppNeQ2L903CZb2ZjfLbFOk0uEbsUr6IMxSTI7i1FB6aRFa-~8gNn7SF18ah2KNuKYwZkBfhSqbj99dVHLYu3azXHm9ijYB~YGTgEcdLTsCr5FlYPQohJjGQjkTugnGiaqHHt2TkQXYuLlIEfwUgv0SpzvESauYkokS3eXGx9dMGwpw__",
  },
  {
    name: "Mr. Upali Kulathunga",
    role: "Marketing Manager",
    image: "https://s3-alpha-sig.figma.com/img/c70b/2f2c/6ea7ed882534718d624c88f285b376e8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSz27ADPJJVOc9F-izXBZlMuMnSdmLzkL4pMYYtzYYpcW2heRQ2Uqa44rAQhceMnt5OoZp0ulMWISIP7D7bxGBWVYSf0QKmQBh70kKqMutDIkt2YNncSA3ZDRvOti4FM2JJSX73Km1yTdks9PPoWbO0ZxSoVdL6jimBvheTPUxXXyPkj3rIF3FkQ2R3VHXLPM3qAgsAJNyJAJSutEeE1gHKvFmsASrarBL2JtWok--n65wVxq0v9tfhniXBFmhHccywqhdUkHJHiOYMzix8kDxavALH0ATqwx8akz6rKUkPNaJvkX6GZs3weAkn-MvT2DxOIQbm7CRMyfwEMRALw8w__",
  },
  {
    name: "Mr. Upali Kulathunga",
    role: "Main Designer",
    image: "https://s3-alpha-sig.figma.com/img/05bc/b56e/115155a54dcccbbf19e96a53b3a00d26?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWKboMAzQBgSbAtf06VTySk-84PF6YfTgzJtTOxl9gCS7tVeq~OfI07TLjlthdJ3fsZucuN~AmHWWRokapxn4QKI36SmsaIixNBdnToCYRUCXFpesyziVoJqWJxZsnm~YYsbOMDlAjjIRmhDQoPAkmAsLug-kIi2Q-FUOkTnRYC0OOYGezFOGlJoD5h-n~dzTqyrfy0833YhvMnc57kA8yYWS-4xYLdvPowjiNordJxtdEUVKQP09Df6umzj~1RGdI5lSp8-Y~BButrgyo7R8aiUFPpNrphI5ZWtWkUUqc~sqPhX-WejWJuBbFWoxe37za9L1-PeMdTPN4hVYlYxMQ__",
  },
];

const TeamSection = () => {
  return (
    <div
      className="py-10 bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/b878/8d51/27baf7eb2492fefb2c03959148442358?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cfcy8kpz4vvkERBYbNgT6eeeFZar0SNy1cGHFVLh1aRcXaIrstnP3fAxIVOqITyPAsC5qtK7DV0Kinra3N6xvElonJoA7VnsN5xkz79LxHaD1G~Ah~9SnZI6-YwunA7LB0MgwLDinj8K1DTZ8SkU1ucftUUiWv2BRV459FyjYXITOSHAd73gmtTgw2mYif8ZCfj7blHeCCqceOFpo2NDkUDOid7M~S~HX6xs89pAXmNG81bqJ2XDdwb09hdzocaJCGeW79YeuLa~NOprEcpPlXMtFNFYkxxJHk97sgHqVtX-ckqs123peavx7a~d35K3FU-9oML-8NKqZWznifcTcA__')", // Replace with your image URL
      }}
    >
      <div className="w-full h-full min-h-screen rounded-[47px]" style={{ background: "#000000B8" }}>
        <div className="container p-20 mx-auto text-center text-white">
          <h2 className="mb-4 text-4xl text-left font-prata">Meet Our Team</h2>
          <p className="mb-8 text-lg text-left font-poppins">
            We are a team of dedicated professionals committed to delivering high-quality construction and design services. Our mission is to provide innovative and reliable solutions that exceed our clients' expectations. With years of experience in the industry, we take pride in our craftsmanship and attention to detail, ensuring that every project we undertake is completed to the highest standards.
          </p>
          
          <div className="grid grid-cols-1 gap-8 ml-20 mr-20 md:grid-cols-2 lg:grid-cols-4">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="p-6 transition-shadow duration-300 bg-white shadow-md hover:shadow-xl"
    >
      <img
        src={member.image}
        alt={member.role}
        className="object-cover w-full h-auto rounded-none" // Removed rounded class
      />
      <h3 className="mt-4 text-xl text-black font-prata">{member.name}</h3>
      <p className=" font-prata text-customGreen">{member.role}</p>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default TeamSection;
