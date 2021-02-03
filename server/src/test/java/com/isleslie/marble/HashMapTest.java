package com.isleslie.marble;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class HashMapTest {

    private static final Map<String, String> map = new ConcurrentHashMap<>();

    public static void main(String[] args) {
        map.put("123", "456");
        System.out.println(map.get("123"));
    }
}
