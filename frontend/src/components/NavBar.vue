<template>
    <nav>
        <div id="container">
            <div class="logo">
                <img alt="logo groupomania" src="../assets/icon.png" class="img" />
            </div>
            <div class="links">
                <ul>
                    <li class="signup">
                        <router-link to="/signup"> Profile</router-link>
                    </li>
                    <li class="login">
                        <router-link to="/login">Logout</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
name: "NavBar"
}
</script>