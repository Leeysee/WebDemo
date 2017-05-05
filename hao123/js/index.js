  function themeChange(colors) {
      localStorage.color = colors;//localStorage记录用户所选主题
      document.getElementById("nav_content").style.backgroundColor = colors;
      document.getElementById("set_homepage").style.backgroundColor = colors;
      document.getElementById("tvin").style.color = colors;
      document.getElementById("tvin1").style.color = colors;
      document.getElementById("tvin2").style.color = colors;
      document.getElementById("tvin2").style.borderColor = colors;
      document.getElementById("tvin3").style.color = colors;
      document.getElementById("tvin3").style.borderColor = colors;
      document.getElementById("tvin4").style.color = colors;
      document.getElementById("tvin4").style.borderColor = colors;
      document.getElementById("line").style.borderColor = colors;
      document.getElementById("line1").style.borderColor = colors;
      document.getElementById("ipt").style.borderColor = colors;
      document.getElementById("btn").style.borderColor = colors;
      document.getElementById("btn").style.backgroundColor = colors;
  }
  themeChange(localStorage.color);//用户再次载入页面时使用之前所选主题
