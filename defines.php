<?php
	session_start();

	define( 'FACEBOOK_APP_ID', '182983283710681' );
	define( 'FACEBOOK_APP_SECRET', 'a41260ae9f2b75f50f915f86889ddcd2' );
	define( 'FACEBOOK_REDIRECT_URI', 'https://localhost/obtaining_access_token.php' );
	define( 'ENDPOINT_BASE', 'https://graph.facebook.com/v5.0/' );

	// accessToken
	$accessToken = 'YOUR-ACCESS-TOKEN-HERE';

	// page id
	$pageId = 'YOUR-PAGE-ID';

	// instagram business account id
	$instagramAccountId = 'YOUR-INSTAGRAM-ACCOUNT-ID';