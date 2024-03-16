create table question_like_log(
	id int auto_increment primary key,
    qid int not null,
    uid int not null,
    likes int not null,
    foreign key (qid) references questions(qid),
    foreign key (uid) references users(uid)
    
);