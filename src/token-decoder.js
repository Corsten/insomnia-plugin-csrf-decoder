module.exports = async function (context) {
    console.log('CSRFToken decoder plugin executing ...');
    const csrf_token = await decodeCsrfToken(context);

    if (context.request.hasHeader('X-CSRF-Token')) {
        console.log(`[header] Skip setting default header ${name}. Already set to ${value}`);
        return;
    }

    context.request.setHeader('X-CSRF-Token', `${csrf_token}`);
    console.log(`[header] Set X-CSRF-Token header: ${csrf_token}`);
};

async function decodeCsrfToken(context) {    
    const csrf_token = context.request.getEnvironmentVariable('xsrf_token');
    console.log('marat');
    console.log(csrf_token)
    if (!csrf_token.length || csrf_token.includes("request 'cookie'")) {
        return '';
    } else {
        let decoded_csrf_token = decodeURIComponent(csrf_token);
        console.log(decoded_csrf_token);
        return decoded_csrf_token;
    }
}