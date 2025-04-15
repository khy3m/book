$(document).ready(function () {
    let isLoggedIn = false;
    let currentRole = "visitor";

    function updateMenu() {
        if (isLoggedIn) {
            $("#login-link")
                .text("Đăng xuất")
                .removeAttr("id")
                .attr("id", "logout-link");
        } else {
            $("#logout-link")
                .text("Đăng nhập")
                .removeAttr("id")
                .attr("id", "login-link");
        }
    }

    function displayUserStatus() {
        const roleText = isLoggedIn ? `Bạn đang đăng nhập với quyền: ${currentRole}` : `Bạn đang truy cập với quyền: Visitor`;
        $("#content").prepend(`<p><strong>${roleText}</strong></p>`);
    }

    $("#home-link").click(function () {
        $("#content").html("<h2>Trang Chủ</h2><p>Chào mừng bạn đến với hệ thống quản lý bán sách.</p>");
        displayUserStatus();
    });

    $("#about-link").click(function () {
        $("#content").html("<h2>Giới Thiệu</h2><p>Đây là hệ thống quản lý bán sách được xây dựng bằng HTML, CSS, JavaScript và JQuery.</p>");
        displayUserStatus();
    });

    $("#view-link").click(function () {
        $("#content").load("view.html", displayUserStatus);
    });

    $("#add-link").click(function () {
        $("#content").load("add-book.html", displayUserStatus);
    });

    $(document).on("click", "#login-link", function () {
        $("#content").load("login.html", displayUserStatus);
    });

    $(document).on("click", "#logout-link", function () {
        isLoggedIn = false;
        currentRole = "visitor";
        updateMenu();
        alert("Bạn đã đăng xuất thành công!");
        $("#content").html("<h2>Trang Chủ</h2><p>Chào mừng bạn đến với hệ thống quản lý bán sách.</p>");
        displayUserStatus();
    });

    $(document).on("submit", "#login-form", function (e) {
        e.preventDefault();
        const email = $("#email").val();
        const password = $("#password").val();

        let role = "visitor";
        if (email === "a@gmail.com")
