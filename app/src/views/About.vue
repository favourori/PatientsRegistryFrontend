<template>
  <div id="main-wrapper">

        <!--**********************************
            Nav header start
        ***********************************-->
        <div class="nav-header">
            <a href="index.html" class="brand-logo">
                <img class="logo-abbr" src="@/assets/images/logo.png" alt="">
                <img class="logo-compact" src="@/assets/images/logo-text.png" alt="">
                <img class="brand-title" src="@/assets/images/logo-text.png" alt="">
            </a>

            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
        <!--**********************************
            Nav header end
        ***********************************-->
		
		<!--**********************************
            Chat box start
        ***********************************-->
		<div class="chatbox">
			<div class="chatbox-close"></div>
			<div class="custom-tab-1">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#notes">Notes</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#alerts">Alerts</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" data-toggle="tab" href="#chat">Chat</a>
					</li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane fade active show" id="chat" role="tabpanel">
						<div class="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
							<div class="card-header chat-list-header text-center">
								<a href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect fill="#000000" x="4" y="11" width="16" height="2" rx="1"/><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1"/></g></svg></a>
								<div>
									<h6 class="mb-1">Chat List</h6>
									<p class="mb-0">Show All</p>
								</div>
								<a href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg></a>
							</div>
							<div class="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
								<ul class="contacts">
									<li class="name-first-letter">A</li>
									<li class="active dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon"></span>
											</div>
											<div class="user_info">
												<span>Archie Parker</span>
												<p>Kalid is online</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="images/avatar/2.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>Alfie Mason</span>
												<p>Taherah left 7 mins ago</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/3.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon"></span>
											</div>
											<div class="user_info">
												<span>AharlieKane</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/4.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>Athan Jacoby</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
									<li class="name-first-letter">B</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/5.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>Bashid Samim</span>
												<p>Rashid left 50 mins ago</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon"></span>
											</div>
											<div class="user_info">
												<span>Breddie Ronan</span>
												<p>Kalid is online</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/2.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>Ceorge Carson</span>
												<p>Taherah left 7 mins ago</p>
											</div>
										</div>
									</li>
									<li class="name-first-letter">D</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/3.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon"></span>
											</div>
											<div class="user_info">
												<span>Darry Parker</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/4.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>Denry Hunter</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
									<li class="name-first-letter">J</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/5.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>Jack Ronan</span>
												<p>Rashid left 50 mins ago</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon"></span>
											</div>
											<div class="user_info">
												<span>Jacob Tucker</span>
												<p>Kalid is online</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/2.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>James Logan</span>
												<p>Taherah left 7 mins ago</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/3.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon"></span>
											</div>
											<div class="user_info">
												<span>Joshua Weston</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li class="name-first-letter">O</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/4.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>Oliver Acker</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
									<li class="dz-chat-user">
										<div class="d-flex bd-highlight">
											<div class="img_cont">
												<img src="@/assets/images/avatar/5.jpg" class="rounded-circle user_img" alt=""/>
												<span class="online_icon offline"></span>
											</div>
											<div class="user_info">
												<span>Oscar Weston</span>
												<p>Rashid left 50 mins ago</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="card chat dz-chat-history-box d-none">
							<div class="card-header chat-list-header text-center">
								<a href="javascript:;" class="dz-chat-history-back">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon points="0 0 24 0 24 24 0 24"/><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x="14" y="7" width="2" height="10" rx="1"/><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "/></g></svg>
								</a>
								<div>
									<h6 class="mb-1">Chat with Khelesh</h6>
									<p class="mb-0 text-success">Online</p>
								</div>							
								<div class="dropdown">
									<a href="javascript:;" data-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg></a>
									<ul class="dropdown-menu dropdown-menu-right">
										<li class="dropdown-item"><i class="fa fa-user-circle text-primary mr-2"></i> View profile</li>
										<li class="dropdown-item"><i class="fa fa-users text-primary mr-2"></i> Add to close friends</li>
										<li class="dropdown-item"><i class="fa fa-plus text-primary mr-2"></i> Add to group</li>
										<li class="dropdown-item"><i class="fa fa-ban text-primary mr-2"></i> Block</li>
									</ul>
								</div>
							</div>
							<div class="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
								<div class="d-flex justify-content-start mb-4">
									<div class="img_cont_msg">
										<img src="images/avatar/1.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
									<div class="msg_cotainer">
										Hi, how are you samim?
										<span class="msg_time">8:40 AM, Today</span>
									</div>
								</div>
								<div class="d-flex justify-content-end mb-4">
									<div class="msg_cotainer_send">
										Hi Khalid i am good tnx how about you?
										<span class="msg_time_send">8:55 AM, Today</span>
									</div>
									<div class="img_cont_msg">
								<img src="@/assets/images/avatar/2.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div class="d-flex justify-content-start mb-4">
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
									<div class="msg_cotainer">
										I am good too, thank you for your chat template
										<span class="msg_time">9:00 AM, Today</span>
									</div>
								</div>
								<div class="d-flex justify-content-end mb-4">
									<div class="msg_cotainer_send">
										You are welcome
										<span class="msg_time_send">9:05 AM, Today</span>
									</div>
									<div class="img_cont_msg">
								<img src="@/assets/images/avatar/2.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div class="d-flex justify-content-start mb-4">
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
									<div class="msg_cotainer">
										I am looking for your next templates
										<span class="msg_time">9:07 AM, Today</span>
									</div>
								</div>
								<div class="d-flex justify-content-end mb-4">
									<div class="msg_cotainer_send">
										Ok, thank you have a good day
										<span class="msg_time_send">9:10 AM, Today</span>
									</div>
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/2.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div class="d-flex justify-content-start mb-4">
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
									<div class="msg_cotainer">
										Bye, see you
										<span class="msg_time">9:12 AM, Today</span>
									</div>
								</div>
								<div class="d-flex justify-content-start mb-4">
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
									<div class="msg_cotainer">
										Hi, how are you samim?
										<span class="msg_time">8:40 AM, Today</span>
									</div>
								</div>
								<div class="d-flex justify-content-end mb-4">
									<div class="msg_cotainer_send">
										Hi Khalid i am good tnx how about you?
										<span class="msg_time_send">8:55 AM, Today</span>
									</div>
									<div class="img_cont_msg">
								<img src="@/assets/images/avatar/2.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div class="d-flex justify-content-start mb-4">
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
									<div class="msg_cotainer">
										I am good too, thank you for your chat template
										<span class="msg_time">9:00 AM, Today</span>
									</div>
								</div>
								<div class="d-flex justify-content-end mb-4">
									<div class="msg_cotainer_send">
										You are welcome
										<span class="msg_time_send">9:05 AM, Today</span>
									</div>
									<div class="img_cont_msg">
								<img src="@/assets/images/avatar/2.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div class="d-flex justify-content-start mb-4">
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
									<div class="msg_cotainer">
										I am looking for your next templates
										<span class="msg_time">9:07 AM, Today</span>
									</div>
								</div>
								<div class="d-flex justify-content-end mb-4">
									<div class="msg_cotainer_send">
										Ok, thank you have a good day
										<span class="msg_time_send">9:10 AM, Today</span>
									</div>
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/2.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div class="d-flex justify-content-start mb-4">
									<div class="img_cont_msg">
										<img src="@/assets/images/avatar/1.jpg" class="rounded-circle user_img_msg" alt=""/>
									</div>
									<div class="msg_cotainer">
										Bye, see you
										<span class="msg_time">9:12 AM, Today</span>
									</div>
								</div>
							</div>
							<div class="card-footer type_msg">
								<div class="input-group">
									<textarea class="form-control" placeholder="Type your message..."></textarea>
									<div class="input-group-append">
										<button type="button" class="btn btn-primary"><i class="fa fa-location-arrow"></i></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="alerts" role="tabpanel">
						<div class="card mb-sm-3 mb-md-0 contacts_card">
							<div class="card-header chat-list-header text-center">
								<a href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg></a>
								<div>
									<h6 class="mb-1">Notications</h6>
									<p class="mb-0">Show All</p>
								</div>
								<a href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"/></g></svg></a>
							</div>
							<div class="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
								<ul class="contacts">
									<li class="name-first-letter">SEVER STATUS</li>
									<li class="active">
										<div class="d-flex bd-highlight">
											<div class="img_cont primary">KK</div>
											<div class="user_info">
												<span>David Nester Birthday</span>
												<p class="text-primary">Today</p>
											</div>
										</div>
									</li>
									<li class="name-first-letter">SOCIAL</li>
									<li>
										<div class="d-flex bd-highlight">
											<div class="img_cont success">RU<i class="icon fa-birthday-cake"></i></div>
											<div class="user_info">
												<span>Perfection Simplified</span>
												<p>Jame Smith commented on your status</p>
											</div>
										</div>
									</li>
									<li class="name-first-letter">SEVER STATUS</li>
									<li>
										<div class="d-flex bd-highlight">
											<div class="img_cont primary">AU<i class="icon fa fa-user-plus"></i></div>
											<div class="user_info">
												<span>AharlieKane</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li>
										<div class="d-flex bd-highlight">
											<div class="img_cont info">MO<i class="icon fa fa-user-plus"></i></div>
											<div class="user_info">
												<span>Athan Jacoby</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="card-footer"></div>
						</div>
					</div>
					<div class="tab-pane fade" id="notes">
						<div class="card mb-sm-3 mb-md-0 note_card">
							<div class="card-header chat-list-header text-center">
								<a href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect fill="#000000" x="4" y="11" width="16" height="2" rx="1"/><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1"/></g></svg></a>
								<div>
									<h6 class="mb-1">Notes</h6>
									<p class="mb-0">Add New Nots</p>
								</div>
								<a href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"/></g></svg></a>
							</div>
							<div class="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
								<ul class="contacts">
									<li class="active">
										<div class="d-flex bd-highlight">
											<div class="user_info">
												<span>New order placed..</span>
												<p>10 Aug 2020</p>
											</div>
											<div class="ml-auto">
												<a href="javascript:;" class="btn btn-primary btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
												<a href="javascript:;" class="btn btn-danger btn-xs sharp"><i class="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div class="d-flex bd-highlight">
											<div class="user_info">
												<span>Youtube, a video-sharing website..</span>
												<p>10 Aug 2020</p>
											</div>
											<div class="ml-auto">
												<a href="javascript:;" class="btn btn-primary btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
												<a href="javascript:;" class="btn btn-danger btn-xs sharp"><i class="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div class="d-flex bd-highlight">
											<div class="user_info">
												<span>john just buy your product..</span>
												<p>10 Aug 2020</p>
											</div>
											<div class="ml-auto">
												<a href="javascript:;" class="btn btn-primary btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
												<a href="javascript:;" class="btn btn-danger btn-xs sharp"><i class="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div class="d-flex bd-highlight">
											<div class="user_info">
												<span>Athan Jacoby</span>
												<p>10 Aug 2020</p>
											</div>
											<div class="ml-auto">
												<a href="javascript:;" class="btn btn-primary btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
												<a href="javascript:;" class="btn btn-danger btn-xs sharp"><i class="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--**********************************
            Chat box End
        ***********************************-->
		
		<!--**********************************
            Header start
        ***********************************-->
        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
                            <div class="dashboard_bar">
                                Dashboard
                            </div>
                        </div>

                        <ul class="navbar-nav header-right">
                            <li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link  ai-icon" href="javascript:;" role="button" data-toggle="dropdown">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M21.75 14.8385V12.0463C21.7471 9.88552 20.9385 7.80353 19.4821 6.20735C18.0258 4.61116 16.0264 3.61555 13.875 3.41516V1.625C13.875 1.39294 13.7828 1.17038 13.6187 1.00628C13.4546 0.842187 13.2321 0.75 13 0.75C12.7679 0.75 12.5454 0.842187 12.3813 1.00628C12.2172 1.17038 12.125 1.39294 12.125 1.625V3.41534C9.97361 3.61572 7.97429 4.61131 6.51794 6.20746C5.06159 7.80361 4.25291 9.88555 4.25 12.0463V14.8383C3.26257 15.0412 2.37529 15.5784 1.73774 16.3593C1.10019 17.1401 0.751339 18.1169 0.75 19.125C0.750764 19.821 1.02757 20.4882 1.51969 20.9803C2.01181 21.4724 2.67904 21.7492 3.375 21.75H8.71346C8.91521 22.738 9.45205 23.6259 10.2331 24.2636C11.0142 24.9013 11.9916 25.2497 13 25.2497C14.0084 25.2497 14.9858 24.9013 15.7669 24.2636C16.548 23.6259 17.0848 22.738 17.2865 21.75H22.625C23.321 21.7492 23.9882 21.4724 24.4803 20.9803C24.9724 20.4882 25.2492 19.821 25.25 19.125C25.2486 18.117 24.8998 17.1402 24.2622 16.3594C23.6247 15.5786 22.7374 15.0414 21.75 14.8385ZM6 12.0463C6.00232 10.2113 6.73226 8.45223 8.02974 7.15474C9.32723 5.85726 11.0863 5.12732 12.9212 5.125H13.0788C14.9137 5.12732 16.6728 5.85726 17.9703 7.15474C19.2677 8.45223 19.9977 10.2113 20 12.0463V14.75H6V12.0463ZM13 23.5C12.4589 23.4983 11.9316 23.3292 11.4905 23.0159C11.0493 22.7026 10.716 22.2604 10.5363 21.75H15.4637C15.284 22.2604 14.9507 22.7026 14.5095 23.0159C14.0684 23.3292 13.5411 23.4983 13 23.5ZM22.625 20H3.375C3.14298 19.9999 2.9205 19.9076 2.75644 19.7436C2.59237 19.5795 2.50014 19.357 2.5 19.125C2.50076 18.429 2.77757 17.7618 3.26969 17.2697C3.76181 16.7776 4.42904 16.5008 5.125 16.5H20.875C21.571 16.5008 22.2382 16.7776 22.7303 17.2697C23.2224 17.7618 23.4992 18.429 23.5 19.125C23.4999 19.357 23.4076 19.5795 23.2436 19.7436C23.0795 19.9076 22.857 19.9999 22.625 20Z" fill="#36C95F"/>
									</svg>
									<span class="badge light text-white bg-primary">12</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <div id="DZ_W_Notification1" class="widget-media dz-scroll p-3 height380">
										<ul class="timeline">
											<li>
												<div class="timeline-panel">
													<div class="media mr-2">
														<img alt="image" width="50" src="@/assets/images/avatar/1.jpg">
													</div>
													<div class="media-body">
														<h6 class="mb-1">Dr sultads Send you Photo</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media mr-2 media-info">
														KG
													</div>
													<div class="media-body">
														<h6 class="mb-1">Resport created successfully</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media mr-2 media-success">
														<i class="fa fa-home"></i>
													</div>
													<div class="media-body">
														<h6 class="mb-1">Reminder : Treatment Time!</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											 <li>
												<div class="timeline-panel">
													<div class="media mr-2">
														<img alt="image" width="50" src="@/assets/images/avatar/1.jpg">
													</div>
													<div class="media-body">
														<h6 class="mb-1">Dr sultads Send you Photo</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media mr-2 media-danger">
														KG
													</div>
													<div class="media-body">
														<h6 class="mb-1">Resport created successfully</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media mr-2 media-primary">
														<i class="fa fa-home"></i>
													</div>
													<div class="media-body">
														<h6 class="mb-1">Reminder : Treatment Time!</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
										</ul>
									</div>
                                    <a class="all-notification" href="javascript:;">See all notifications <i class="ti-arrow-right"></i></a>
                                </div>
                            </li>
							<li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link bell bell-link" href="javascript:;">
                                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20.4604 0.848846H3.31682C2.64742 0.849582 2.00565 1.11583 1.53231 1.58916C1.05897 2.0625 0.792727 2.70427 0.791992 3.37367V15.1562C0.792727 15.8256 1.05897 16.4674 1.53231 16.9407C2.00565 17.414 2.64742 17.6803 3.31682 17.681C3.53999 17.6812 3.75398 17.7699 3.91178 17.9277C4.06958 18.0855 4.15829 18.2995 4.15843 18.5226V20.3168C4.15843 20.6214 4.24112 20.9204 4.39768 21.1817C4.55423 21.4431 4.77879 21.6571 5.04741 21.8008C5.31602 21.9446 5.61861 22.0127 5.92292 21.998C6.22723 21.9833 6.52183 21.8863 6.77533 21.7173L12.6173 17.8224C12.7554 17.7299 12.9179 17.6807 13.0841 17.681H17.187C17.7383 17.68 18.2742 17.4993 18.7136 17.1664C19.1531 16.8334 19.472 16.3664 19.6222 15.8359L22.8965 4.05007C22.9998 3.67478 23.0152 3.28071 22.9413 2.89853C22.8674 2.51634 22.7064 2.15636 22.4707 1.8466C22.2349 1.53684 21.9309 1.28565 21.5822 1.1126C21.2336 0.93954 20.8497 0.849282 20.4604 0.848846ZM21.2732 3.60301L18.0005 15.3847C17.9499 15.5614 17.8432 15.7168 17.6964 15.8274C17.5496 15.938 17.3708 15.9979 17.187 15.9978H13.0841C12.5855 15.9972 12.098 16.1448 11.6836 16.4219L5.84165 20.3168V18.5226C5.84091 17.8532 5.57467 17.2115 5.10133 16.7381C4.62799 16.2648 3.98622 15.9985 3.31682 15.9978C3.09365 15.9977 2.87966 15.909 2.72186 15.7512C2.56406 15.5934 2.47534 15.3794 2.47521 15.1562V3.37367C2.47534 3.15051 2.56406 2.93652 2.72186 2.77871C2.87966 2.62091 3.09365 2.5322 3.31682 2.53206H20.4604C20.5905 2.53239 20.7187 2.56274 20.8352 2.62073C20.9516 2.67872 21.0531 2.7628 21.1318 2.86643C21.2104 2.97005 21.2641 3.09042 21.2886 3.21818C21.3132 3.34594 21.3079 3.47763 21.2732 3.60301Z" fill="#36C95F"/>
										<path d="M5.84161 8.42333H10.0497C10.2729 8.42333 10.4869 8.33466 10.6448 8.17683C10.8026 8.019 10.8913 7.80493 10.8913 7.58172C10.8913 7.35851 10.8026 7.14445 10.6448 6.98661C10.4869 6.82878 10.2729 6.74011 10.0497 6.74011H5.84161C5.6184 6.74011 5.40433 6.82878 5.2465 6.98661C5.08867 7.14445 5 7.35851 5 7.58172C5 7.80493 5.08867 8.019 5.2465 8.17683C5.40433 8.33466 5.6184 8.42333 5.84161 8.42333Z" fill="#36C95F"/>
										<path d="M13.4161 10.1065H5.84161C5.6184 10.1065 5.40433 10.1952 5.2465 10.353C5.08867 10.5109 5 10.7249 5 10.9481C5 11.1714 5.08867 11.3854 5.2465 11.5433C5.40433 11.7011 5.6184 11.7898 5.84161 11.7898H13.4161C13.6393 11.7898 13.8534 11.7011 14.0112 11.5433C14.169 11.3854 14.2577 11.1714 14.2577 10.9481C14.2577 10.7249 14.169 10.5109 14.0112 10.353C13.8534 10.1952 13.6393 10.1065 13.4161 10.1065Z" fill="#36C95F"/>
									</svg>
									<span class="badge light text-white bg-primary">5</span>
                                </a>
							</li>
							<li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link" href="javascript:;"  role="button" data-toggle="dropdown">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22.625 5.125H21.75V1.625C21.75 1.47262 21.7102 1.32289 21.6345 1.19062C21.5589 1.05835 21.45 0.948128 21.3186 0.870868C21.1873 0.793609 21.0381 0.751989 20.8857 0.750126C20.7333 0.748264 20.5831 0.786224 20.4499 0.86025L13 4.99909L5.55007 0.86025C5.41688 0.786224 5.26667 0.748264 5.11431 0.750126C4.96194 0.751989 4.8127 0.793609 4.68136 0.870868C4.55002 0.948128 4.44113 1.05835 4.36547 1.19062C4.28981 1.32289 4.25001 1.47262 4.25 1.625V5.125H3.375C2.67904 5.12576 2.01181 5.40257 1.51969 5.89469C1.02757 6.3868 0.750764 7.05404 0.75 7.75V10.375C0.750764 11.071 1.02757 11.7382 1.51969 12.2303C2.01181 12.7224 2.67904 12.9992 3.375 13H4.25V22.625C4.25076 23.321 4.52757 23.9882 5.01969 24.4803C5.51181 24.9724 6.17904 25.2492 6.875 25.25H19.125C19.821 25.2492 20.4882 24.9724 20.9803 24.4803C21.4724 23.9882 21.7492 23.321 21.75 22.625V13H22.625C23.321 12.9992 23.9882 12.7224 24.4803 12.2303C24.9724 11.7382 25.2492 11.071 25.25 10.375V7.75C25.2492 7.05404 24.9724 6.3868 24.4803 5.89469C23.9882 5.40257 23.321 5.12576 22.625 5.125ZM20 5.125H16.3769L20 3.1125V5.125ZM6 3.1125L9.62311 5.125H6V3.1125ZM6 22.625V13H12.125V23.5H6.875C6.64303 23.4997 6.42064 23.4074 6.25661 23.2434C6.09258 23.0793 6.0003 22.857 6 22.625ZM20 22.625C19.9997 22.857 19.9074 23.0793 19.7434 23.2434C19.5794 23.4074 19.357 23.4997 19.125 23.5H13.875V13H20V22.625ZM23.5 10.375C23.4997 10.607 23.4074 10.8294 23.2434 10.9934C23.0794 11.1574 22.857 11.2497 22.625 11.25H3.375C3.14303 11.2497 2.92064 11.1574 2.75661 10.9934C2.59258 10.8294 2.5003 10.607 2.5 10.375V7.75C2.5003 7.51803 2.59258 7.29564 2.75661 7.13161C2.92064 6.96758 3.14303 6.8753 3.375 6.875H22.625C22.857 6.8753 23.0794 6.96758 23.2434 7.13161C23.4074 7.29564 23.4997 7.51803 23.5 7.75V10.375Z" fill="#3E4954"/>
									</svg>
									<span class="badge light text-white bg-dark">2</span>
                                </a>
								<div class="dropdown-menu dropdown-menu-right p-3">
                                    <div id="DZ_W_Gifts" class="widget-timeline dz-scroll style-1 height300">
										<ul class="timeline">
											<li>
												<div class="timeline-badge primary"></div>
												<a class="timeline-panel text-muted" href="javascript:;">
													<span>10 minutes ago</span>
													<h6 class="mb-0">Youtube, a video-sharing website, goes live <strong class="text-primary">$500</strong>.</h6>
												</a>
											</li>
											<li>
												<div class="timeline-badge info">
												</div>
												<a class="timeline-panel text-muted" href="javascript:;">
													<span>20 minutes ago</span>
													<h6 class="mb-0">New order placed <strong class="text-info">#XF-2356.</strong></h6>
													<p class="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
												</a>
											</li>
											<li>
												<div class="timeline-badge danger">
												</div>
												<a class="timeline-panel text-muted" href="javascript:;">
													<span>30 minutes ago</span>
													<h6 class="mb-0">john just buy your product <strong class="text-warning">Sell $250</strong></h6>
												</a>
											</li>
											<li>
												<div class="timeline-badge success">
												</div>
												<a class="timeline-panel text-muted" href="javascript:;">
													<span>15 minutes ago</span>
													<h6 class="mb-0">StumbleUpon is acquired by eBay. </h6>
												</a>
											</li>
											<li>
												<div class="timeline-badge warning">
												</div>
												<a class="timeline-panel text-muted" href="javascript:;">
													<span>20 minutes ago</span>
													<h6 class="mb-0">Mashable, a news website and blog, goes live.</h6>
												</a>
											</li>
											<li>
												<div class="timeline-badge dark">
												</div>
												<a class="timeline-panel text-muted" href="javascript:;">
													<span>20 minutes ago</span>
													<h6 class="mb-0">Mashable, a news website and blog, goes live.</h6>
												</a>
											</li>
										</ul>
									</div>
                                </div>
							</li>
                            <li class="nav-item dropdown header-profile">
                                <a class="nav-link" href="javascript:;" role="button" data-toggle="dropdown">
                                    <img src="@/assets/images/profile/12.png" width="20" alt=""/>
									<div class="header-info">
										<span>Hello,<strong> Roberto</strong></span>
									</div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="app-profile.html" class="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span class="ml-2">Profile </span>
                                    </a>
                                    <a href="email-inbox.html" class="dropdown-item ai-icon">
                                        <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" class="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <span class="ml-2">Inbox </span>
                                    </a>
                                    <a href="page-login.html" class="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span class="ml-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <!--**********************************
            Header end ti-comment-alt
        ***********************************-->

        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class="deznav">
            <div class="deznav-scroll">
				<ul class="metismenu" id="menu">
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-networking"></i>
							<span class="nav-text">Dashboard</span>
						</a>
                        <ul aria-expanded="false">
							<li><a href="index.html">Dashboard</a></li>
							<li><a href="patient-list.html">Patient</a></li>
							<li><a href="patient-details.html">Patient Details</a></li>
							<li><a href="doctor-list.html">Doctor</a></li>
							<li><a href="doctor-detail.html">Doctor Detail</a></li>
							<li><a href="page-review.html">Review</a></li>
						</ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
						<i class="flaticon-381-television"></i>
							<span class="nav-text">Apps</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="app-profile.html">Profile</a></li>
                            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Email</a>
                                <ul aria-expanded="false">
                                    <li><a href="email-compose.html">Compose</a></li>
                                    <li><a href="email-inbox.html">Inbox</a></li>
                                    <li><a href="email-read.html">Read</a></li>
                                </ul>
                            </li>
                            <li><a href="app-calender.html">Calendar</a></li>
							<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Shop</a>
                                <ul aria-expanded="false">
                                    <li><a href="ecom-product-grid.html">Product Grid</a></li>
									<li><a href="ecom-product-list.html">Product List</a></li>
									<li><a href="ecom-product-detail.html">Product Details</a></li>
									<li><a href="ecom-product-order.html">Order</a></li>
									<li><a href="ecom-checkout.html">Checkout</a></li>
									<li><a href="ecom-invoice.html">Invoice</a></li>
									<li><a href="ecom-customers.html">Customers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-controls-3"></i>
							<span class="nav-text">Charts</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="chart-flot.html">Flot</a></li>
                            <li><a href="chart-morris.html">Morris</a></li>
                            <li><a href="chart-chartjs.html">Chartjs</a></li>
                            <li><a href="chart-chartist.html">Chartist</a></li>
                            <li><a href="chart-sparkline.html">Sparkline</a></li>
                            <li><a href="chart-peity.html">Peity</a></li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-internet"></i>
							<span class="nav-text">Bootstrap</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="ui-accordion.html">Accordion</a></li>
                            <li><a href="ui-alert.html">Alert</a></li>
                            <li><a href="ui-badge.html">Badge</a></li>
                            <li><a href="ui-button.html">Button</a></li>
                            <li><a href="ui-modal.html">Modal</a></li>
                            <li><a href="ui-button-group.html">Button Group</a></li>
                            <li><a href="ui-list-group.html">List Group</a></li>
                            <li><a href="ui-media-object.html">Media Object</a></li>
                            <li><a href="ui-card.html">Cards</a></li>
                            <li><a href="ui-carousel.html">Carousel</a></li>
                            <li><a href="ui-dropdown.html">Dropdown</a></li>
                            <li><a href="ui-popover.html">Popover</a></li>
                            <li><a href="ui-progressbar.html">Progressbar</a></li>
                            <li><a href="ui-tab.html">Tab</a></li>
                            <li><a href="ui-typography.html">Typography</a></li>
                            <li><a href="ui-pagination.html">Pagination</a></li>
                            <li><a href="ui-grid.html">Grid</a></li>

                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-heart"></i>
							<span class="nav-text">Plugins</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="uc-select2.html">Select 2</a></li>
                            <li><a href="uc-nestable.html">Nestedable</a></li>
                            <li><a href="uc-noui-slider.html">Noui Slider</a></li>
                            <li><a href="uc-sweetalert.html">Sweet Alert</a></li>
                            <li><a href="uc-toastr.html">Toastr</a></li>
                            <li><a href="map-jqvmap.html">Jqv Map</a></li>
                            <li><a href="uc-lightgallery.html">Light Gallery</a></li>
                        </ul>
                    </li>
                    <li><a href="widget-basic.html" class="ai-icon" aria-expanded="false">
							<i class="flaticon-381-settings-2"></i>
							<span class="nav-text">Widget</span>
						</a>
					</li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-notepad"></i>
							<span class="nav-text">Forms</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="form-element.html">Form Elements</a></li>
                            <li><a href="form-wizard.html">Wizard</a></li>
                            <li><a href="form-editor-summernote.html">Summernote</a></li>
                            <li><a href="form-pickers.html">Pickers</a></li>
                            <li><a href="form-validation-jquery.html">Jquery Validate</a></li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-network"></i>
							<span class="nav-text">Table</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
                            <li><a href="table-datatable-basic.html">Datatable</a></li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-layer-1"></i>
							<span class="nav-text">Pages</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="page-register.html">Register</a></li>
                            <li><a href="page-login.html">Login</a></li>
                            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
                                <ul aria-expanded="false">
                                    <li><a href="page-error-400.html">Error 400</a></li>
                                    <li><a href="page-error-403.html">Error 403</a></li>
                                    <li><a href="page-error-404.html">Error 404</a></li>
                                    <li><a href="page-error-500.html">Error 500</a></li>
                                    <li><a href="page-error-503.html">Error 503</a></li>
                                </ul>
                            </li>
                            <li><a href="page-lock-screen.html">Lock Screen</a></li>
                        </ul>
                    </li>
                </ul>
            
				<div class="plus-box">
					<p class="fs-16 font-w500 mb-1">Check your job schedule</p>
					<a class="text-white fs-26" href="javascript:;"><i class="las la-long-arrow-alt-right"></i></a>
				</div>
				<div class="copyright">
					<p class="fs-14 font-w200"><strong class="font-w400">Eres Hospital Admin Dashboard</strong> © 2020 All Rights Reserved</p>
					<p>Made with <i class="fa fa-heart"></i> by DexignZone</p>
				</div>
			</div>
        </div>
        <!--**********************************
            Sidebar end
        ***********************************-->
		
		<!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="form-head d-flex mb-3 mb-md-4 align-items-start">
					<div class="mr-auto d-none d-lg-block">
						<h3 class="text-black font-w600">Welcome to Eres!</h3>
						<p class="mb-0 fs-18">Hospital Admin Dashboard Template</p>
					</div>
					
					<div class="input-group search-area ml-auto d-inline-flex">
						<input type="text" class="form-control" placeholder="Search here">
						<div class="input-group-append">
							<button type="button" class="input-group-text"><i class="flaticon-381-search-2"></i></button>
						</div>
					</div>
					<a href="javascript:void(0);" class="settings-icon  ml-3"><i class="flaticon-381-settings-2 mr-0"></i></a>
				</div>
				<div class="row">	
					<div class="col-xl-3 col-xxl-6 col-sm-6">
						<div class="card gradient-bx text-white bg-danger rounded">	
							<div class="card-body">
								<div class="media align-items-center">
									<div class="media-body">
										<p class="mb-1">Total Patient</p>
										<div class="d-flex flex-wrap">
											<h2 class="fs-40 font-w600 text-white mb-0 mr-3">783k</h2>
											<div>	
												<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.56244 9.25C6.35869 11.6256 2.26214 16.0091 0.999939 17.5H26.4374V1L16.8124 13.375L8.56244 9.25Z" fill="url(#paint0_linear4)"/>
													<path d="M0.999939 17.5C2.26214 16.0091 6.35869 11.6256 8.56244 9.25L16.8124 13.375L26.4374 1" stroke="white" stroke-width="2"/>
													<defs>
													<linearGradient id="paint0_linear4" x1="13.7187" y1="3.0625" x2="14.7499" y2="17.5" gradientUnits="userSpaceOnUse">
													<stop stop-color="white" stop-opacity="0.73" offset="0.1"/>
													<stop offset="1" stop-color="white" stop-opacity="0"/>
													</linearGradient>
													</defs>
												</svg>
												<div class="fs-14">+4%</div>
											</div>
										</div>
									</div>
									<span class="border rounded-circle p-4">
										<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M23.6667 0.333311C21.1963 0.264777 18.7993 1.17744 17 2.87164C15.2008 1.17744 12.8038 0.264777 10.3334 0.333311C8.9341 0.337244 7.55292 0.649469 6.28803 1.24778C5.02315 1.84608 3.90564 2.71577 3.01502 3.79498C-0.039984 7.45998 -0.261651 13.3333 1.19668 17.5966C1.21002 17.6266 1.22002 17.6566 1.23335 17.6866C3.91168 25.3333 15.2717 33.6666 17 33.6666C18.6983 33.6666 30.025 25.5166 32.7667 17.6866C32.78 17.6566 32.79 17.6266 32.8034 17.5966C34.2417 13.4016 34.0867 7.51498 30.985 3.79498C30.0944 2.71577 28.9769 1.84608 27.712 1.24778C26.4471 0.649469 25.0659 0.337244 23.6667 0.333311ZM17 30.03C14.6817 28.5233 8.23168 24 5.30335 18.6666H12C12.2743 18.6667 12.5444 18.599 12.7863 18.4696C13.0282 18.3403 13.2344 18.1532 13.3867 17.925L14.83 15.7583L17.0867 22.525C17.1854 22.8207 17.3651 23.0829 17.6054 23.2816C17.8456 23.4803 18.1368 23.6076 18.4458 23.6491C18.7548 23.6906 19.0693 23.6446 19.3535 23.5163C19.6376 23.388 19.8801 23.1825 20.0533 22.9233L22.8917 18.6666H28.6984C25.7684 24 19.3183 28.5233 17 30.03ZM29.975 15.3333H22C21.7257 15.3333 21.4556 15.4009 21.2137 15.5303C20.9718 15.6597 20.7656 15.8468 20.6133 16.075L19.17 18.2416L16.9133 11.475C16.8146 11.1792 16.6349 10.9171 16.3947 10.7184C16.1544 10.5196 15.8632 10.3923 15.5542 10.3508C15.2452 10.3093 14.9307 10.3553 14.6466 10.4837C14.3624 10.612 14.1199 10.8174 13.9467 11.0766L11.1084 15.3333H4.02502C3.35835 12.1816 3.50502 8.41164 5.57668 5.92831C6.151 5.22081 6.87614 4.65057 7.69911 4.25927C8.52209 3.86797 9.42209 3.6655 10.3334 3.66664C15.445 3.66664 14.9117 7.16664 16.9817 7.18664H17C19.0733 7.18664 18.5483 3.66664 23.6667 3.66664C24.5785 3.665 25.4792 3.86723 26.3027 4.25855C27.1263 4.64987 27.852 5.22037 28.4267 5.92831C30.4867 8.40331 30.6467 12.1666 29.975 15.3333Z" fill="white"/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-6 col-sm-6">
						<div class="card gradient-bx text-white bg-success rounded">	
							<div class="card-body">
								<div class="media align-items-center">
									<div class="media-body">
										<p class="mb-1">Doctor</p>
										<div class="d-flex flex-wrap">
											<h2 class="fs-40 font-w600 text-white mb-0 mr-3">76</h2>
											<div>	
												<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M18.875 9.25C21.0787 11.6256 25.1753 16.0091 26.4375 17.5H1V1L10.625 13.375L18.875 9.25Z" fill="url(#paint0_linear1)"/>
													<path d="M26.4375 17.5C25.1753 16.0091 21.0787 11.6256 18.875 9.25L10.625 13.375L1 1" stroke="white" stroke-width="2"/>
													<defs>
													<linearGradient id="paint0_linear1" x1="13.7188" y1="3.0625" x2="12.6875" y2="17.5" gradientUnits="userSpaceOnUse">
													<stop stop-color="white" stop-opacity="0.73" offset="0.1"/>
													<stop offset="1" stop-color="white" stop-opacity="0"/>
													</linearGradient>
													</defs>
												</svg>
												<div class="fs-14">-4%</div>
											</div>
										</div>
									</div>
									<span class="border rounded-circle p-4">
										<svg width="34" height="34" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M37.3333 15.6666C37.3383 14.7488 37.0906 13.8473 36.6174 13.061C36.1441 12.2746 35.4635 11.6336 34.6501 11.2084C33.8368 10.7831 32.9221 10.5899 32.0062 10.65C31.0904 10.7101 30.2087 11.021 29.4579 11.5489C28.707 12.0767 28.1159 12.8011 27.7494 13.6425C27.3829 14.484 27.255 15.4101 27.3799 16.3194C27.5047 17.2287 27.8774 18.086 28.4572 18.7976C29.0369 19.5091 29.8013 20.0473 30.6667 20.3533V25.6666C30.6667 27.8768 29.7887 29.9964 28.2259 31.5592C26.6631 33.122 24.5435 34 22.3333 34C20.1232 34 18.0036 33.122 16.4408 31.5592C14.878 29.9964 14 27.8768 14 25.6666V23.8666C16.7735 23.4642 19.3097 22.0777 21.1456 19.9603C22.9815 17.8429 23.9946 15.1358 24 12.3333V2.33329C24 1.89127 23.8244 1.46734 23.5118 1.15478C23.1993 0.842221 22.7754 0.666626 22.3333 0.666626H17.3333C16.8913 0.666626 16.4674 0.842221 16.1548 1.15478C15.8423 1.46734 15.6667 1.89127 15.6667 2.33329C15.6667 2.77532 15.8423 3.19924 16.1548 3.5118C16.4674 3.82436 16.8913 3.99996 17.3333 3.99996H20.6667V12.3333C20.6667 14.5434 19.7887 16.663 18.2259 18.2258C16.6631 19.7887 14.5435 20.6666 12.3333 20.6666C10.1232 20.6666 8.00358 19.7887 6.44077 18.2258C4.87797 16.663 4 14.5434 4 12.3333V3.99996H7.33333C7.77536 3.99996 8.19928 3.82436 8.51184 3.5118C8.8244 3.19924 9 2.77532 9 2.33329C9 1.89127 8.8244 1.46734 8.51184 1.15478C8.19928 0.842221 7.77536 0.666626 7.33333 0.666626H2.33333C1.8913 0.666626 1.46738 0.842221 1.15482 1.15478C0.842259 1.46734 0.666664 1.89127 0.666664 2.33329V12.3333C0.672024 15.1358 1.68515 17.8429 3.52106 19.9603C5.35697 22.0777 7.8932 23.4642 10.6667 23.8666V25.6666C10.6667 28.7608 11.8958 31.7283 14.0837 33.9162C16.2717 36.1041 19.2391 37.3333 22.3333 37.3333C25.4275 37.3333 28.395 36.1041 30.5829 33.9162C32.7708 31.7283 34 28.7608 34 25.6666V20.3533C34.9723 20.0131 35.8151 19.3797 36.4122 18.5402C37.0092 17.7008 37.3311 16.6967 37.3333 15.6666Z" fill="white"/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-6 col-sm-6">
						<div class="card gradient-bx text-white bg-info rounded">	
							<div class="card-body">
								<div class="media align-items-center">
									<div class="media-body">
										<p class="mb-1">Appointment</p>
										<div class="d-flex flex-wrap">
											<h2 class="fs-40 font-w600 text-white mb-0 mr-3">76</h2>
											<div>	
												<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M18.875 9.25C21.0787 11.6256 25.1753 16.0091 26.4375 17.5H1V1L10.625 13.375L18.875 9.25Z" fill="url(#paint0_linear2)"/>
													<path d="M26.4375 17.5C25.1753 16.0091 21.0787 11.6256 18.875 9.25L10.625 13.375L1 1" stroke="white" stroke-width="2"/>
													<defs>
													<linearGradient id="paint0_linear2" x1="13.7188" y1="3.0625" x2="12.6875" y2="17.5" gradientUnits="userSpaceOnUse">
													<stop stop-color="white" stop-opacity="0.73" offset="0.1"/>
													<stop offset="1" stop-color="white" stop-opacity="0"/>
													</linearGradient>
													</defs>
												</svg>
												<div class="fs-14">-4%</div>
											</div>
										</div>
									</div>
									<span class="border rounded-circle p-4">
										<svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip0)">
											<path d="M35 5H33.3333C33.3333 3.67392 32.8065 2.40215 31.8689 1.46447C30.9312 0.526784 29.6594 0 28.3333 0C27.0072 0 25.7355 0.526784 24.7978 1.46447C23.8601 2.40215 23.3333 3.67392 23.3333 5H16.6667C16.6667 3.67392 16.1399 2.40215 15.2022 1.46447C14.2645 0.526784 12.9927 7.45058e-08 11.6667 7.45058e-08C10.3406 7.45058e-08 9.06881 0.526784 8.13113 1.46447C7.19345 2.40215 6.66667 3.67392 6.66667 5H5C3.67392 5 2.40215 5.52678 1.46447 6.46447C0.526784 7.40215 0 8.67392 0 10L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V10C40 8.67392 39.4732 7.40215 38.5355 6.46447C37.5979 5.52678 36.3261 5 35 5ZM5 8.33333H6.66667C6.66667 9.65942 7.19345 10.9312 8.13113 11.8689C9.06881 12.8065 10.3406 13.3333 11.6667 13.3333C12.1087 13.3333 12.5326 13.1577 12.8452 12.8452C13.1577 12.5326 13.3333 12.1087 13.3333 11.6667C13.3333 11.2246 13.1577 10.8007 12.8452 10.4882C12.5326 10.1756 12.1087 10 11.6667 10C11.2246 10 10.8007 9.8244 10.4882 9.51184C10.1756 9.19928 10 8.77536 10 8.33333V5C10 4.55797 10.1756 4.13405 10.4882 3.82149C10.8007 3.50893 11.2246 3.33333 11.6667 3.33333C12.1087 3.33333 12.5326 3.50893 12.8452 3.82149C13.1577 4.13405 13.3333 4.55797 13.3333 5V6.66667C13.3333 7.10869 13.5089 7.53262 13.8215 7.84518C14.134 8.15774 14.558 8.33333 15 8.33333H23.3333C23.3333 9.65942 23.8601 10.9312 24.7978 11.8689C25.7355 12.8065 27.0072 13.3333 28.3333 13.3333C28.7754 13.3333 29.1993 13.1577 29.5118 12.8452C29.8244 12.5326 30 12.1087 30 11.6667C30 11.2246 29.8244 10.8007 29.5118 10.4882C29.1993 10.1756 28.7754 10 28.3333 10C27.8913 10 27.4674 9.8244 27.1548 9.51184C26.8423 9.19928 26.6667 8.77536 26.6667 8.33333V5C26.6667 4.55797 26.8423 4.13405 27.1548 3.82149C27.4674 3.50893 27.8913 3.33333 28.3333 3.33333C28.7754 3.33333 29.1993 3.50893 29.5118 3.82149C29.8244 4.13405 30 4.55797 30 5V6.66667C30 7.10869 30.1756 7.53262 30.4882 7.84518C30.8007 8.15774 31.2246 8.33333 31.6667 8.33333H35C35.442 8.33333 35.866 8.50893 36.1785 8.82149C36.4911 9.13405 36.6667 9.55797 36.6667 10V16.6667H3.33333V10C3.33333 9.55797 3.50893 9.13405 3.82149 8.82149C4.13405 8.50893 4.55797 8.33333 5 8.33333ZM35 36.6667H5C4.55797 36.6667 4.13405 36.4911 3.82149 36.1785C3.50893 35.866 3.33333 35.442 3.33333 35V20H36.6667V35C36.6667 35.442 36.4911 35.866 36.1785 36.1785C35.866 36.4911 35.442 36.6667 35 36.6667Z" fill="white"/>
											<path d="M20 26.6667C20.9205 26.6667 21.6667 25.9205 21.6667 25C21.6667 24.0795 20.9205 23.3333 20 23.3333C19.0795 23.3333 18.3333 24.0795 18.3333 25C18.3333 25.9205 19.0795 26.6667 20 26.6667Z" fill="white"/>
											<path d="M30 26.6667C30.9205 26.6667 31.6667 25.9205 31.6667 25C31.6667 24.0795 30.9205 23.3333 30 23.3333C29.0796 23.3333 28.3334 24.0795 28.3334 25C28.3334 25.9205 29.0796 26.6667 30 26.6667Z" fill="white"/>
											<path d="M9.99995 26.6667C10.9204 26.6667 11.6666 25.9205 11.6666 25C11.6666 24.0795 10.9204 23.3333 9.99995 23.3333C9.07947 23.3333 8.33328 24.0795 8.33328 25C8.33328 25.9205 9.07947 26.6667 9.99995 26.6667Z" fill="white"/>
											<path d="M20 33.3334C20.9205 33.3334 21.6667 32.5872 21.6667 31.6667C21.6667 30.7462 20.9205 30 20 30C19.0795 30 18.3333 30.7462 18.3333 31.6667C18.3333 32.5872 19.0795 33.3334 20 33.3334Z" fill="white"/>
											<path d="M30 33.3334C30.9205 33.3334 31.6667 32.5872 31.6667 31.6667C31.6667 30.7462 30.9205 30 30 30C29.0796 30 28.3334 30.7462 28.3334 31.6667C28.3334 32.5872 29.0796 33.3334 30 33.3334Z" fill="white"/>
											<path d="M9.99995 33.3334C10.9204 33.3334 11.6666 32.5872 11.6666 31.6667C11.6666 30.7462 10.9204 30 9.99995 30C9.07947 30 8.33328 30.7462 8.33328 31.6667C8.33328 32.5872 9.07947 33.3334 9.99995 33.3334Z" fill="white"/>
											</g>
											<defs>
											<clipPath id="clip0">
											<rect width="40" height="40" fill="white"/>
											</clipPath>
											</defs>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-6 col-sm-6">
						<div class="card gradient-bx text-white bg-secondary rounded">	
							<div class="card-body">
								<div class="media align-items-center">
									<div class="media-body">
										<p class="mb-1">Hospital Earning</p>
										<div class="d-flex flex-wrap">
											<h2 class="fs-40 font-w600 text-white mb-0 mr-3">$56k</h2>
											<div>	
												<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.56244 9.25C6.35869 11.6256 2.26214 16.0091 0.999939 17.5H26.4374V1L16.8124 13.375L8.56244 9.25Z" fill="url(#paint0_linear3)"/>
													<path d="M0.999939 17.5C2.26214 16.0091 6.35869 11.6256 8.56244 9.25L16.8124 13.375L26.4374 1" stroke="white" stroke-width="2"/>
													<defs>
													<linearGradient id="paint0_linear3" x1="13.7187" y1="3.0625" x2="14.7499" y2="17.5" gradientUnits="userSpaceOnUse">
													<stop stop-color="white" stop-opacity="0.73" offset="0.1"/>
													<stop offset="1" stop-color="white" stop-opacity="0"/>
													</linearGradient>
													</defs>
												</svg>
												<div class="fs-14">+4%</div>
											</div>
										</div>
									</div>
									<span class="border rounded-circle p-4">
										<svg width="34" height="34" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.21864 35H11.6667V31.7747C17.7104 31.496 21.0001 27.7133 21.0001 23.413C21.0001 17.2412 15.7596 16.0865 11.6667 14.8919V8.72014C12.7378 9.11832 13.4645 10.0341 13.6175 11.5074H20.6175C20.2733 6.45051 16.9072 3.66325 11.6667 3.22526V0H9.21864V3.22526C4.01645 3.58362 6.10352e-05 6.53015 6.10352e-05 11.5074C6.10352e-05 17.7588 5.12574 18.9534 9.21864 20.0683V26.3595C7.91809 25.9215 7.15307 24.9261 7.00006 23.2935H0.0383124C0.229569 28.43 4.01645 31.2571 9.21864 31.7349V35ZM14.1531 23.6519C14.1531 25.1251 13.1968 26.2002 11.6667 26.479V20.8248C13.1585 21.4221 14.1531 22.2184 14.1531 23.6519ZM6.92356 11.1889C6.92356 9.63595 7.80334 8.75995 9.21864 8.52105V14.0557C7.84159 13.4187 6.92356 12.5825 6.92356 11.1889Z" fill="white"/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-4 col-lg-4">
						<div class="card">
							<div class="card-header border-0 pb-0">
								<h3 class="fs-20 mb-0 text-black">Revenue</h3>
								<div class="dropdown d-inline-block">
									<div class="btn-link text-primary dropdown-toggle mb-0 fs-14 text-primary" data-toggle="dropdown">
										<span class="font-w500">2020</span>
									</div>
									<div class="dropdown-menu dropdown-menu-left">
										<a class="dropdown-item" href="javascript:void(0);">2019</a>
										<a class="dropdown-item" href="javascript:void(0);">2018</a>
									</div>
								</div>
							</div>
							<div class="card-body">
								<div>
									<span class="text-info fs-26 font-w600 mr-3">$41,512k</span>
									<span class="text-secondary fs-18 font-w400">$25,612k</span>
								</div>
								<div id="line-chart"></div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-xxl-8 col-lg-8">
						<div class="card">	
							<div class="card-header d-sm-flex d-block border-0 pb-0">
								<h3 class="fs-20 mb-3 mb-sm-0 text-black">Patient Statistic</h3>
								<div class="card-action card-tabs mt-3 mt-sm-0 mt-3 mt-sm-0">
									<ul class="nav nav-tabs" role="tablist">
										<li class="nav-item">
											<a class="nav-link active" data-toggle="tab" href="#monthly" role="tab">
												Monthly
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" data-toggle="tab" href="#weekly" role="tab">
												Weekly
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" data-toggle="tab" href="#today" role="tab">
												Today
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="card-body">
								<div id="chartBar"></div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-xxl-8 col-lg-7">
						<div class="card">	
							<div class="card-header border-0 pb-0">
								<h3 class="fs-20 mb-0 text-black">Top Rated Doctors</h3>
								<a href="page-review.html" class="text-primary font-w500">View more >></a>
							</div>
							<div class="card-body">
								<div class="assigned-doctor owl-carousel">
									<div class="items">
										<div class="text-center">
											<img src="@/assets/images/doctors/5.jpg" alt="" >
											<div class="dr-star"><i class="las la-star"></i> 4.2</div>
											<h5 class="fs-16 mb-1 font-w600"><a class="text-black" href="page-review.html">Dr. Alexandro Jr.</a></h5>
											<span class="text-primary mb-2 d-block">Dentist</span>
											<p class="fs-12">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
											<div class="social-media">
												<a href="javascript:void(0);"><i class="lab la-instagram"></i></a>
												<a href="javascript:void(0);"><i class="lab la-facebook-f"></i></a>
												<a href="javascript:void(0);"><i class="lab la-twitter"></i></a>
											</div>
										</div>
									</div>
									<div class="items">
										<div class="text-center">
											<img src="@/assets/images/doctors/1.jpg" alt="" >
											<div class="dr-star"><i class="las la-star"></i> 4.2</div>
											<h5 class="fs-16 mb-1 font-w600"><a class="text-black" href="page-review.html">Dr. Samantha</a></h5>
											<span class="text-primary mb-2 d-block">Physical Therapy</span>
											<p class="fs-12">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
											<div class="social-media">
												<a href="javascript:void(0);"><i class="lab la-instagram"></i></a>
												<a href="javascript:void(0);"><i class="lab la-facebook-f"></i></a>
												<a href="javascript:void(0);"><i class="lab la-twitter"></i></a>
											</div>
										</div>
									</div>
									<div class="items">
										<div class="text-center">
											<img src="@/assets/images/doctors/2.jpg" alt="" >
											<div class="dr-star"><i class="las la-star"></i> 4.2</div>
											<h5 class="fs-16 mb-1 font-w600"><a class="text-black" href="page-review.html">Dr. Aliandro M</a></h5>
											<span class="text-primary mb-2 d-block">Nursing</span>
											<p class="fs-12">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
											<div class="social-media">
												<a href="javascript:void(0);"><i class="lab la-instagram"></i></a>
												<a href="javascript:void(0);"><i class="lab la-facebook-f"></i></a>
												<a href="javascript:void(0);"><i class="lab la-twitter"></i></a>
											</div>
										</div>
									</div>
									<div class="items">
										<div class="text-center">
											<img  src="@/assets/images/doctors/3.jpg" alt="" >
											<div class="dr-star"><i class="las la-star"></i> 4.2</div>
											<h5 class="fs-16 mb-1 font-w600"><a class="text-black" href="page-review.html">Dr. Samuel</a></h5>
											<span class="text-primary mb-2 d-block">Gynecologist</span>
											<p class="fs-12">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
											<div class="social-media">
												<a href="javascript:void(0);"><i class="lab la-instagram"></i></a>
												<a href="javascript:void(0);"><i class="lab la-facebook-f"></i></a>
												<a href="javascript:void(0);"><i class="lab la-twitter"></i></a>
											</div>
										</div>
									</div>
									<div class="items">
										<div class="text-center">
											<img src="@/assets/images/doctors/4.jpg" alt="" >
											<div class="dr-star"><i class="las la-star"></i> 4.2</div>
											<h5 class="fs-16 mb-1 font-w600"><a class="text-black" href="page-review.html">Dr. Melinda</a></h5>
											<span class="text-primary mb-2 d-block">Dentist</span>
											<p class="fs-12">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
											<div class="social-media">
												<a href="javascript:void(0);"><i class="lab la-instagram"></i></a>
												<a href="javascript:void(0);"><i class="lab la-facebook-f"></i></a>
												<a href="javascript:void(0);"><i class="lab la-twitter"></i></a>
											</div>
										</div>
									</div>
									<div class="items">
										<div class="text-center">
											<img src="@/assets/images/doctors/1.jpg" alt="" >
											<div class="dr-star"><i class="las la-star"></i> 4.2</div>
											<h5 class="fs-16 mb-1 font-w600"><a class="text-black" href="page-review.html">Dr. Alexandro Jr.</a></h5>
											<span class="text-primary mb-2 d-block">Dentist</span>
											<p class="fs-12">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
											<div class="social-media">
												<a href="javascript:void(0);"><i class="lab la-instagram"></i></a>
												<a href="javascript:void(0);"><i class="lab la-facebook-f"></i></a>
												<a href="javascript:void(0);"><i class="lab la-twitter"></i></a>
											</div>
										</div>
									</div>
									<div class="items">
										<div class="text-center">
											<img  src="@/assets/images/doctors/2.jpg" alt="" >
											<div class="dr-star"><i class="las la-star"></i> 4.2</div>
											<h5 class="fs-16 mb-1 font-w600"><a class="text-black" href="page-review.html">Dr. Aliandro M</a></h5>
											<span class="text-primary mb-2 d-block">Nursing</span>
											<p class="fs-12">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
											<div class="social-media">
												<a href="javascript:void(0);"><i class="lab la-instagram"></i></a>
												<a href="javascript:void(0);"><i class="lab la-facebook-f"></i></a>
												<a href="javascript:void(0);"><i class="lab la-twitter"></i></a>
											</div>
										</div>
									</div>
									<div class="items">
										<div class="text-center">
											<img src="@/assets/images/doctors/3.jpg" alt="" >
											<div class="dr-star"><i class="las la-star"></i> 4.2</div>
											<h5 class="fs-16 mb-1 font-w600"><a class="text-black" href="page-review.html">Dr. Samuel</a></h5>
											<span class="text-primary mb-2 d-block">Gynecologist</span>
											<p class="fs-12">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
											<div class="social-media">
												<a href="javascript:void(0);"><i class="lab la-instagram"></i></a>
												<a href="javascript:void(0);"><i class="lab la-facebook-f"></i></a>
												<a href="javascript:void(0);"><i class="lab la-twitter"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-4 col-lg-5">
            <div class="card border-0 pb-0">
              <div class="card-header flex-wrap border-0 pb-0">
                <h3 class="fs-20 mb-0 text-black">Recent Patient</h3>
								<a href="patient-list.html" class="text-primary font-w500">View more >></a>
              </div>
              <div class="card-body"> 
                <div id="DZ_W_Todo2" class="widget-media dz-scroll ps ps--active-y height320">
                  <ul class="timeline">
                    <li>
                      <div class="timeline-panel flex-wrap">
												<div class="media mr-3">
													<img class="rounded-circle" alt="image" width="50" src="@/assets/images/widget/1.jpg">
												</div>
                      <div class="media-body">
												<h5 class="mb-1"><a class="text-black" href="patient-details.html">Aziz Bakree</a></h5>
												<span class="fs-14">24 Years</span>
											</div>
												<a href="javascript:void(0);" class="text-warning mt-2">Pending</a>
											</div>
                    </li>
                    <li>
                      <div class="timeline-panel flex-wrap">
												<div class="media mr-3">
													<img class="rounded-circle" alt="image" width="50" src="@/assets/images/widget/2.jpg">
												</div>
                      <div class="media-body">
												<h5 class="mb-1"><a class="text-black" href="patient-details.html">Griezerman</a></h5>
												<span class="fs-14">24 Years</span>
											</div>
												<a href="javascript:void(0);" class="text-info mt-2">On Recovery</a>
											</div>
                    </li>
                  <li>
                    <div class="timeline-panel flex-wrap">
                      <div class="media mr-3">
                        <img class="rounded-circle" alt="image" width="50" src="images/widget/3.jpg">
                      </div>
                      <div class="media-body">
                        <h5 class="mb-1"><a class="text-black" href="patient-details.html">Oconner</a></h5>
                        <span class="fs-14">24 Years</span>
                      </div>
                      <a href="javascript:void(0);" class="text-danger mt-2">Rejected</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
					</div>
				</div>
      </div>
    </div>
    <div class="footer">
      <div class="copyright">
        <p>Copyright © Designed &amp; Developed by <a href="http://dexignzone.com/" target="_blank">DexignZone</a> 2020</p>
      </div>
    </div>
        
  </div>
</template>
