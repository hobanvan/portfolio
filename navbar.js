
document.getElementById('Nav').innerHTML = 
`
<nav class="Navbar">
            <a href="#" id="toggle" class="Toggle Navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse"
                ><span></span
            ></a>

            <a class="Navbar-brand u-pullRight" href="file:///F:/portfolio/index.html">hobanvan.github.io</a>

            <div id="navbarCollapse" class="Navbar-menu">
                <ul class="Navbar-menu-major">
                    <li><a href="#link">Portfolio</a></li>
                    <li><a href="file:///F:/portfolio/skills/skills.html">Skills</a></li>
                    <li><a href="#link">Project</a></li>
                    <li><a href="#link">About Me</a></li>
                </ul>
                <div class="Navbar-menu-minor">
                    <ul>
                        <li><a href="#link">Floppy</a></li>
                        <li><a href="#link">Design Info</a></li>
                        <li><a href="#link">Develop Info</a></li>
                    </ul>
                    <ul>
                        <li><a href="#link">Linkedin</a></li>
                        <li><a href="#link">RocketPunch</a></li>
                        <li><a href="#link">Contact</a></li>
                    </ul>
                    <ul class="Navbar-menu-social u-Navbar-hidden@sm-up">
                        <li>
                            <a class="SocialLink" href="#link">
                                <svg class="SocialLink-icon"><use xlink:href="#facebook" /></svg>
                                <span class="SocialLink-text">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a class="SocialLink" href="#link">
                                <svg class="SocialLink-icon"><use xlink:href="#twitter" /></svg>
                                <span class="SocialLink-text">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a class="SocialLink" href="#link">
                                <svg class="SocialLink-icon"><use xlink:href="#instagram" /></svg>
                                <span class="SocialLink-text">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <ul class="Navbar-quickLinks">
                <li><a href="https://www.facebook.com/hobanvan123/">Facebook</a></li>
                <li><a href="https://hoban123.tistory.com/">Blog</a></li>
                <li><a href="https://www.instagram.com/lake_side__/?hl=ko">Instagram</a></li>
            </ul>
        </nav>
`;

$('#toggle').click(function () {
    $(this).toggleClass('is-active');
    $('#navbarCollapse').toggleClass('is-active');
    $('.main').toggleClass('.main ml');
});

