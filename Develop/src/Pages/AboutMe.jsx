
function AboutMe() {
    return (
        <div className="text-center my-5">
            <h2>About Me</h2>

            //<div> img{
                display: flex;
                flex: 1 1 100px;
                max-width: 200px;
                border-radius: '50%';
            };
            </div>  //

            <img src="/pic-of-me.jpg" alt="Avatar" className="img-fluid rounded-circle my-3" style={{ maxWidth: '200px' }} />
            <p className="text-muted">
                My name is Dylan and I am a full-stack software engineer. My main language is Javascript with an emphasis in
                React applications. I am from northern California and I reside in Davis, CA currently. I have worked in
                several different areas before becoming a developer including: Brewing, Beekeeping, Teaching, Service industry,
                and working for a 5-star hotel. I enjoy camping, hiking, photography, and attending concerts. I am very excited to
                break into the tech industry and build some awesome applications. Thank you for visiting my portfolio! For more
                info about my experience or tech stack you can view my resume.
            </p>
        </div>
    )
}


export default AboutMe;