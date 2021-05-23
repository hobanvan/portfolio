<?php
    include 'defines.php';
    if(!session_id()) {
        session_start();
    }
    // load graph-sdk files
    require_once __DIR__ . '/vendor/autoload.php';

    // facebook credentials array
    $creds = array(
        'app_id' => FACEBOOK_APP_ID,
        'app_secret' => FACEBOOK_APP_SECRET,
        'default_graph_version' => 'v3.2',
        'persistent_data_handler' => 'session'
    );

    // create facebook object
    $facebook = new Facebook\Facebook( $creds );
    if(!session_id()) {
        session_start();
    }
    $w = stream_get_wrappers();
    echo 'openssl: ',  extension_loaded  ('openssl') ? 'yes':'no', "<br/>";
    echo 'http wrapper: ', in_array('http', $w) ? 'yes':'no', "<br/>";
    echo 'https wrapper: ', in_array('https', $w) ? 'yes':'no', "<br/>";
    echo 'wrappers: ', var_dump($w);
    // helper
    $helper = $facebook->getRedirectLoginHelper();
    if (isset($_GET['state'])) {
        $helper->getPersistentDataHandler()->set('state', $_GET['state']);
    }
    // oauth object
    $oAuth2Client = $facebook->getOAuth2Client();
    $accessToken = $helper->getAccessToken();
    if ( isset( $_GET['code'] ) ) { // get access token
        try {
            $accessToken = $helper->getAccessToken();
        } catch ( Facebook\Exceptions\FacebookResponseException $e ) { // graph error
            echo 'Graph returned an error ' . $e->getMessage;
        } catch ( Facebook\Exceptions\FacebookSDKException $e ) { // validation error
            echo 'Facebook SDK returned an error ' . $e->getMessage;
        }
        
        
        if ( !$accessToken->isLongLived() ) { // exchange short for long
            try {
                $accessToken = $oAuth2Client->getLongLivedAccessToken( $accessToken );
            } catch ( Facebook\Exceptions\FacebookSDKException $e ) {
                echo 'Error getting long lived access token ' . $e->getMessage();
            }
        }

        echo '<pre>';
        var_dump( $accessToken );

        $accessToken = (string) $accessToken;
        echo '<h1>Long Lived Access Token</h1>';
        print_r( $accessToken );
    } else { // display login url
        $permissions = [
            'public_profile', 
            'instagram_basic', 
            'pages_show_list', 
            'instagram_manage_insights', 
            'instagram_manage_comments', 
            'manage_pages',
            'ads_management', 
            'business_management', 
            'instagram_content_publish', 
            'pages_read_engagement'
        ];
        $loginUrl = $helper->getLoginUrl( FACEBOOK_REDIRECT_URI, $permissions );
    
        echo '<a href="' . $loginUrl . '">
            Login With Facebook
        </a>';
    }