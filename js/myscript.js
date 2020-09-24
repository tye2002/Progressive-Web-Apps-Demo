var $sidenav = $('.sidenav'),
    $toggler = $('.navbar-toggler'),
    collapsed = false;
$sidenav.css('top', $('.navbar').outerHeight());

if (window.innerWidth < 768) {
  collapse();
}

$(window).resize(function() {
  if (window.innerWidth < 768) {
    console.log(collapsed);
    collapse();
  } else {
    console.log(collapsed);
    restore();
  }
});

$toggler.click(function() {
  if (!$sidenav.hasClass('show')) {
    showSidenav();
  } else {
    hideSidenav();
  }
})

function showSidenav() {
  $sidenav.css('display', 'flex');
  window.setTimeout(function() {
    $sidenav.css({
      'width':'200px', 
      'box-shadow':'-10px 10px 512px 256px #000000cc', 
      'background-color':'#000000db'
    });
  }, 10);
  $toggler.css('color', 'white');
  $sidenav.addClass('show');
}

function hideSidenav() {
  $sidenav.css({
    'width':'0px', 
    'box-shadow':'none',
    'background':'transparent'
  });
  window.setTimeout(function() {
    $sidenav.css('display', 'none');
  }, 500);
  $toggler.css('color', 'white')
  $sidenav.removeClass('show');
}

function collapse() {
  if (!collapsed) {
    $('.navbar-collapse > ul').appendTo('.sidenav').addClass('w-100 text-center');
    $('.sidenav > ul .nav-link').addClass('w-100');
    collapsed = true;
  }
}

function restore() {
  if (collapsed) {
    $('.sidenav > ul').appendTo('.navbar-collapse').removeClass('w-100 text-center');
    $('.sidenav > ul .nav-link').removeClass('w-100');
    hideSidenav();
    collapsed = false;
  }
}

const container = document.querySelector(".menu")
const coffees = [
    { name: "Cafe Sua", image: "images/cafesua.JPG" },
    { name: "Cafe Sua Trung Muoi", image: "images/cafesuatrungmuoi.JPG" },
    { name: "Coldbrew Cam Vang", image: "images/coldbrewcamvang.JPG" },
    { name: "Coldbrew Phuc Bon Tu", image: "images/coldbrewphucbontu.JPG" },
    { name: "Tra Dao Cam Sa", image: "images/tradaocamsa.JPG" },
    { name: "Tra Den Machiato", image: "images/tradenmachiato.JPG" },
    { name: "Tra Lai Sen Trung Muoi", image: "images/tralaisentrungmuoi.JPG" },
    { name: "Tra Sua Khoai Mon", image: "images/trasuakhoaimon.JPG" },
    { name: "Tra Sua Mac Ca CTC", image: "images/trasuamacatct.JPG" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Order</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

