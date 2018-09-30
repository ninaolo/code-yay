---
title: Sorting in Java
slug: java-sort
---

### Arrays & Lambda

```java
Meeting[] meetings = new Meeting[] {new Meeting(3, 4), new Meeting(5, 7), new Meeting(4, 6)};
List&lt;Meeting&gt; meetingsList = Arrays.asList(new Meeting(3, 4), new Meeting(5, 7), new Meeting(4, 6));

// Sort by start time of meeting with lambda expression sort.
Arrays.sort(meetings, (Meeting o1, Meeting o2) -> o1.start - o2.start);
Collections.sort(meetingsList, (Meeting o1, Meeting o2) -> o1.start - o2.start);

// Alternatively skip the Collections sort and use the List instead.
meetingsList.sort((o1, o2) -> o1.start - o2.start);
```

### Comparator
```java
Meeting[] meetings = new Meeting[] {new Meeting(3, 4), new Meeting(5, 7), new Meeting(4, 6)};
List&lt;Meeting&gt; meetingsList = Arrays.asList(new Meeting(3, 4), new Meeting(5, 7), new Meeting(4, 6));

// Sort by start time of meeting with Comparator anonymous class.
Arrays.sort(meetings, new Comparator&lt;Meeting&gt;() {
    @Override public int compare(Meeting o1, Meeting o2) {
        return o1.start - o2.start;
    }
});

// Sort by start time of meeting with Comparator anonymous class.
Collections.sort(meetingsList, new Comparator&lt;Meeting&gt;() {
    @Override public int compare(Meeting o1, Meeting o2) {
        return o1.start - o2.start;
    }
});
```

