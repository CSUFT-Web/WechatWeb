package cn.wechat.poorguy.httpservlet.project1;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ArrayBlockingQueue;

import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.jsp.jstl.core.Config;

import net.sf.json.JSONArray;
import net.sf.json.JsonConfig;

public class MyHttpServlet extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		String getname = req.getParameter("getname");
		Map map = new HashMap();
		PrintWriter pw = resp.getWriter();
		if(req.getMethod().equals("POST")){
			getinfo(map, pw,getname);
		}else{
			getinfo(map, pw,getname);
		}
	}
	
	/**
	 * 通过读取文件,返回json格式字符串
	 * @param map
	 * @param pw
	 */
	private void getinfo(Map map, PrintWriter pw,String getname) {
		//linux address	/www/mysql.json
		try (BufferedReader in = new BufferedReader(new FileReader("/www/mysql.json"))){
			String string;
			while(null!=(string = in.readLine())){
				String []tempstring = string.split("\\s+");
				if(tempstring[0].equals(getname)){
					map.put("getname", getname);
					map.put("name",tempstring[0]);
					map.put("id", tempstring[1]);
					map.put("qq", tempstring[2]);
					map.put("email", tempstring[3]);
					map.put("class", tempstring[4]);
					break;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		JSONArray json = JSONArray.fromObject(map);
		
		pw.write(json.toString());
	}
}
