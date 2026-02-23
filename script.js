<script>
function buyAmazon(){
    // Open Amazon link in new tab
    window.open("https://www.amazon.com/", "_blank");
}

function buyEbook(){
    // Use a gentle confirm box instead of a harsh alert
    const confirmBuy = confirm("You are being redirected to our secure payment page for the E-book. Proceed?");
    if(confirmBuy) {
        window.open("https://gumroad.com/", "_blank");
    }
}

function buySigned(){
    alert("Signed copies are handled personally. We will open your email client now.");
    window.location.href = "mailto:your-email@example.com?subject=Request for Signed Copy";
}

function shareTwitter(){
    const text = "I'm reclaiming my story with 'Beyond the Shadows'. Join the manifesto!";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
}

function shareTikTok(){
    alert("Record your 'Shadow Journey' and tag us! 🌿 #BeyondTheShadows");
}
</script>
