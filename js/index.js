var productscontent = `
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Tools
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="about.html">Tools Homepage</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="http://strafecode.com/dl/visualsteamcmd/latest">Visual SteamCMD</a>
        <a class="dropdown-item" href="http://github.com/strafecode/vscmd">Visual SteamCMD Github</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="http://github.com/strafecode/website">StrafeCode.com Website Github</a>
    </div>
</li>`;

document.getElementById("products-js").innerHTML = productscontent;

initalScript()