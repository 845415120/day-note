package com.guigu.a_extends;

public class Text1 {
    public static void main(String[] args) {
        Teacher teacher = new Teacher();
        teacher.name="江哥";
        teacher.age =18;
        System.out.println(teacher.name+"..."+teacher.age);
        teacher.work(); // public非私有
//        teacher.eat();  private私有
    }
}
