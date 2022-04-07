import db from "./createSchemas.js";

db.query(`INSERT INTO wine(prod_img_ref,title,origin,grape_variety,rating,ratings,origin_img_ref,price,price_pr_box,wine_type,type,producer,year_of_prod) 
VALUES
('tQ9xfrXeRy2hOWQvcjozkw_pb_x960.png','1000 Stories','California,USA','Zinfandel',3.5,155,'united-states-of-america-flag-png-large.png ',80,300,'Red','Bottle',null,2020),
('x4Ax5VgmTIGbRFD0Z17_jw_pb_x960.png','Gigino 80','Toscana,Italia','Cabernet Sauvignon',4.6,177,'italy-flag-png-large.png',299,null,'Red','Bottle','Barbanera',2017),
('H_9PXrzoQOa5_olkCMo8UA_pb_x960.png','Marquis Red','California, USA','Zinfandel',3.9,551,'united-states-of-america-flag-png-large.png',215,null,'Red','Bottle','Noble Vines',2018),
('k_kwsGy9Q-iDdH9PA_e63A_pb_x960.png','Fanova Riserva','Gioia del Colle, Italy','Primitivo',4.6,101,'italy-flag-png-large.png',150,null,'Red','Bottle','Terrecarsiche 1939',2018),
('gAFVPJ5DS4uQ1MoHnvZm3Q_pb_x960.png','Barossa Ink Shiraz','Barossa, Australia','Shiraz',4.2,2233,'australia-flag-png-large.png',149,null,'Red','Bottle','
Grant Burge',2019);`);

db.query(`INSERT INTO users(fullname,email,username,password)
VALUES
('Jonas Kunert','jonaskunert@hotmail.com','jona881a','$2b$12$RlfNz8TeGS3mxXvAFJn5BemlfMjwtub9M34NkCEL6lBMvUd8FGdly'),
('Bernie Winestein','Winer69@gmail.com','Winer69','$2b$12$rWke0sd3BaWLBbs/1gdtfesjUp.7XmzxBpPdMMDkYJpDp6uQVOpS6')`);

db.end();
