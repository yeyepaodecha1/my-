<template>
	<view>
		<swiper :circular="true" indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
		 indicator-active-color="white">
			<swiper-item>
				<view class="swiper-item">
					<image src="http://xiaojie.xuejss.com/img/img/szlg/1.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="http://xiaojie.xuejss.com/img/img/szlg/2.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="http://xiaojie.xuejss.com/img/img/szlg/3.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="http://xiaojie.xuejss.com/img/img/szlg/4.png" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="main">
			<view class="map">
				<a href="javascript:;">
					<p>地图</p>
					<p>导航</p>
				</a>
			</view>
			<view class="text">
				<h2>苏大简介</h2>
				<h4>Soochow University</h4>
				<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    苏州大学坐落于素有“人间天堂”之称的历史文化名城苏州，是国家“211工程”、“2011”计划首批入列高校，是教育部与江苏省政府共建“双一流”建设高校、国防科技工业局和江苏省政府共建高校，是江苏省属重点综合性大学。苏州大学前身是Soochow University（东吴大学，1900年创办），开西式教育之先河，融中西文化之菁华，是中国最早以现代大学学科体系举办的大学。在中国高等教育史上，东吴大学最先开展法学（英美法）专业教育、最早开展研究生教育并授予硕士学位，也是第一家创办学报的大学。1952年中国大陆院系调整，由东吴大学之文理学院、苏南文化教育学院、江南大学之数理系合并组建苏南师范学院，同年更名为江苏师范学院。1982年，学校更复名苏州大学（Soochow University）。其后，苏州蚕桑专科学校（1995年）、苏州丝绸工学院（1997年）和苏州医学院（2000年）等相继并入苏州大学。从民国时期的群星璀璨，到共和国时代的开拓创新；从师范教育的文脉坚守，到综合性大学的战略转型与回归；从多校并入的跨越发展，到争创一流的重塑辉煌，苏州大学在中国高等教育史上留下了浓墨重彩的一笔。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个多世纪以来，一代代苏大人始终秉承“养天地正气，法古今完人”之校训，坚守学术至上、学以致用，倡导自由开放、包容并蓄、追求卓越，坚持博学笃行、止于至善，致力于培育兼具“自由之精神、卓越之能力、独立之人格、社会之责任”的模范公民，在长期的办学过程中为社会输送了50多万名各类专业人才，包括许德珩、周谷城、费孝通、雷洁琼、孙起孟、赵朴初、钱伟长、董寅初、李政道、倪征日奥(yù）、郑辟疆、杨铁樑、查良镛（金庸）等一大批精英栋梁和社会名流；谈家桢、陈子元、郁铭芳、宋大祥、詹启敏等30多位两院院士，为国家建设与社会发展作出了重要贡献。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 苏州大学现有哲学、经济学、法学、教育学、文学、历史学、理学、工学、农学、医学、管理学、艺术学等十二大学科门类。学校设有26个学院（部），拥有全日制本科生27136人，全日制硕士生11959人，在职专业学位硕士1726人，全日制博士生1788人，临床博士2146人，各类留学生2207人。学校现设130个本科专业；51个一级学科硕士点，24个专业学位硕士点；28个一级学科博士点，1个专业学位博士点，29个博士后流动站；学校现有1个国家一流学科，4个国家重点学科，20个江苏高校优势学科，9个“十三五”江苏省重点学科。截止目前，学校化学、物理学、材料科学、临床医学、工程学、药学与毒理学、生物与生物化学、神经科学与行为科学、分子生物与遗传学共9个学科进入全球基本科学指标（ESI）前1%，化学、材料科学2个学科进入全球基本科学指标（ESI）前1‰。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校现有2个国家级人才培养基地，1个国家创新人才培养示范基地，3个国家级实验教学示范中心，1个国家级虚拟仿真实验教学示范中心，2个国家级人才培养模式创新实验区，1个国家级大学生校外实践教学基地；1个国家2011协同创新中心（牵头单位）；1个教育部人文社科重点研究基地；1个省部共建国家重点实验室，1个国家工程实验室，2个国家地方联合工程实验室，2个国家级国际合作联合研究中心，3个国家级公共服务平台，1个国家大学科技园，1个国家重点实验室培育基地，1个江苏省高校国家重点实验室培育建设点，4个江苏高校协同创新中心，19个省部级哲社重点研究基地，30个省部级重点实验室，11个省部级公共服务平台，4个省部级工程中心。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，全校教职工5197人，具有副高职称及以上人员2489人，其中诺贝尔奖获得者1人，中国科学院及工程院院士7人，发达国家院士4人；国家杰出青年基金获得者27人、国家优秀青年基金获得者36人，“万人计划”杰出人才1人、“万人计划”科技创新领军人才8人、“万人计划”青年拔尖人才3人，国务院学位评定委员会学科评议组成员6人，一支力量比较雄厚、结构比较合理的师资队伍已初步形成。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苏州大学将人才培养作为学校的中心工作，以立德树人为根本，以培养具备责任感、创新性、应用性和国际性的卓越型人才为定位，以通识教育与专业教育相融合为指导，以提升学生综合素质、夯实专业基础、培养创新创业能力为重点，积极深化人才培养系统化改革，不断提升人才培养质量。学校纳米科学技术学院被列为全国首批17所国家试点学院之一，成为高等教育体制机制改革特区；学校设立了2个书院，积极探索人才培养新模式，其中敬文书院定位于专业教育之外的“第二课堂”，唐文治书院在“第一课堂”开展博雅教育。近年来，学校学生每年获得国家级奖项200余人次。2013年我校成功举办第十三届“挑战杯”全国大学生系列科技学术竞赛，并以团体总分全国第二的成绩再捧优胜杯；2018年，我校在“创青春”创业大赛专项赛中获得金奖1项，铜奖2项。在近四届奥运会上，陈艳青、吴静钰、孙杨和周春秀四位同学共获得了“五金一银一铜”的佳绩，国际奥委会主席罗格先生特别致信表示感谢。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校实施“顶天立地”科技创新战略，科研创新工作取得累累硕果。2018年，人文社科领域获得国家级项目37项，其中重大项目4项，重点项目3项；21项成果获得江苏省第十五届哲社科学优秀成果奖，其中一等奖3项；18项成果获得江苏省教育科学研究成果奖，其中一等奖3项；1项成果获第七届鲁迅文学奖，1人获得“江苏社科名家”称号。自然科学领域，获国家自然科学基金326项，立项数位列全国高校第19位，蝉联地方高校第1位，连续七年稳居全国高校20强；13项成果获得江苏省科学技术奖，其中一等奖2项。2018年我校共申报知识产权1745件，授权知识产权1181件（其中国际专利申请159件，授权24件）。2017年度三大检索收录论文4460篇，其中SCIE收录论文2659篇，“中国卓越国际科技论文”1283篇，分别位列全国高校第23位和第21位；根据Nature出版集团发布的全球机构自然指数（Nature Index）情况：苏州大学2018自然指数在全球机构排名第46位，位列全国高校第9位。在全球专业信息与分析服务领导者科睿唯安发布的2018年“高被引科学家”榜单中，苏州大学被引18人次，位列全国高校第4位。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校按照“以国际知名带动国内一流”的发展思路，全面深入推进教育国际化进程。学校先后与30多个国家、地区的180余所高校和研究机构建立了校际交流关系。学校每年招收来自80余个国家或地区的留学生3000多人次。2007年起学校与美国波特兰州立大学合作建立波特兰州立大学孔子学院。2010年，入选教育部“中非高校20+20合作计划”，援建尼日利亚拉各斯大学。2011年，在老挝成功创办中国第一家境外高校——“老挝苏州大学”，该校现已成为国家“一带一路”战略上的重要驿站和文化名片。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苏州大学现有天赐庄校区、独墅湖校区、阳澄湖校区三大校区，占地面积3586亩，建筑面积158万余平方米；学校图书资料丰富，藏书超500万册，中外文期刊40余万册，中外文电子书刊110余万册，中外文数据库82个。学校主办有《苏州大学学报》哲学社会科学版、教育科学版和法学版三本学报及《代数集刊》、《现代丝绸科学与技术》、《中国血液流变学》和《语言与符号学研究》等专业学术期刊。其中，《苏州大学学报（哲学社会科学版）》近五年来，刊文被《新华文摘》和《人大复印报刊资料》等权威二次文献转载摘编，其转载量一直位居综合性大学学报排名前十。根据2018年中国社会科学评价研究院发布的《中国人文社会科学期刊AMI综合评价报告（2018年）》，苏州大学学报《哲学社会科学版》和《教育科学版》双刊同时被评为中国人文社会科学期刊核心期刊。
</p>
<p class="sdabout1" style="border: 0px; font-family: 微软雅黑; -webkit-font-smoothing: subpixel-antialiased; font-size: 14px; color: rgb(36, 33, 29); line-height: 30px; text-align: justify;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面向“十三五”，全体苏大人正以昂扬的姿态、开放的胸襟、全球的视野，顺天时、乘地利、求人和，坚持人才强校、质量强校、文化强校，依托长三角地区雄厚的经济实力和优越的人文、地域条件，努力将学校建设成为国内一流、国际知名高水平研究型大学，成为区域高素质创新创业人才培养、高水平科学研究和高新技术研发、高层次决策咨询的重要基地。
</p>
<p>
    <br/>
</p>


			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.swiper-item {
		width: 100%;
	}

	.swiper-item image {
		width: 100%;
	}

	.main {
		position: relative;
	}

	.map {
		background: #723473;
		color: white;
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		display: flex;
		position: absolute;
		top: -60upx;
		right: 40upx;
	}

	a {

		color: white;
		align-self: center;
		margin: auto;

	}

	a,
	a:hover,
	a:active,
	a:visited,
	a:link,
	a:focus {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent;
		outline: none;
		background: none;
		text-decoration: none;
	}


	h2,
	h4 {
		color: #723473;
	}

	h4 {
		margin-bottom: 20upx;
	}

	.text {
		padding: 40upx 30upx 30upx 30upx;

	}

	.text p {
		margin-bottom: 20upx;
		text-indent: 2em;
	}
</style>
